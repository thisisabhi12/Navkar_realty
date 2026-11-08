Add-Type -AssemblyName System.Drawing

$srcPath = "public\premium-commercial-space.jpg"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)

function CropImage($x, $y, $w, $h, $destName) {
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $dest = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($src, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()

    $destFilePublic = "public\$destName"
    $destFileDist = "dist\$destName"

    # Save as high quality JPEG
    $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatDescription -eq "JPEG" }
    $encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]95)

    $dest.Save($destFilePublic, $encoder, $encParams)
    $dest.Save($destFileDist, $encoder, $encParams)
    $dest.Dispose()
    Write-Output "Saved $destName ($w x $h)"
}

# 1. Main Elevation (x: 160, y: 20, w: 585, h: 395)
CropImage 160 20 585 395 "premium-commercial-building.jpg"

# 2. Right Inset Entrance Tower (x: 746, y: 185, w: 250, h: 400)
CropImage 746 185 250 400 "premium-commercial-entrance.jpg"

# 3. Left View Thumbnail (x: 0, y: 418, w: 175, h: 170)
CropImage 0 418 175 170 "premium-commercial-left.jpg"

# 4. Front View Thumbnail (x: 177, y: 418, w: 211, h: 170)
CropImage 177 418 211 170 "premium-commercial-front.jpg"

# 5. 360 View Aerial Thumbnail (x: 390, y: 418, w: 220, h: 170)
CropImage 390 418 220 170 "premium-commercial-360.jpg"

# 6. Right View Thumbnail (x: 612, y: 418, w: 186, h: 170)
CropImage 612 418 186 170 "premium-commercial-right.jpg"

# 7. Back View Thumbnail (x: 800, y: 418, w: 224, h: 170)
CropImage 800 418 224 170 "premium-commercial-back.jpg"

$src.Dispose()
