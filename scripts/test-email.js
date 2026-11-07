import dotenv from 'dotenv';
dotenv.config();
import { sendLeadNotification } from '../server/emailService.js';

async function runTests() {
  console.log('--- STARTING NAVKAR REALTY EMAIL SYSTEM TESTS ---');
  let passed = 0;
  let failed = 0;

  // Test 1: Contact Us Form Submission
  console.log('\n[TEST 1] Testing Contact Us / Consultation Form...');
  const test1 = await sendLeadNotification({
    formType: 'Website Contact Us / Site Tour Inquiry',
    fullName: 'Rajesh Patel',
    phone: '+91 91739 46161',
    email: 'rajesh.patel@example.com',
    preferredLocality: 'Vasna Road',
    propertyType: 'Buy 3 BHK',
    needLoanAssistance: true,
    message: 'Interested in a Vastu-compliant 3 BHK flat near Diwalipura with ready possession.',
    pageUrl: 'https://navkarrealty.com/#contact',
    submittedAt: new Date().toISOString()
  });

  if (test1.success) {
    console.log('✓ TEST 1 PASSED: Email generated successfully.');
    console.log(`  MessageId: ${test1.messageId}`);
    if (test1.previewUrl) console.log(`  Preview URL: ${test1.previewUrl}`);
    passed++;
  } else {
    console.error('✗ TEST 1 FAILED:', test1.message);
    failed++;
  }

  // Test 2: Site Visit Request for Antica Greenwood
  console.log('\n[TEST 2] Testing Site Visit Request (Antica Greenwood)...');
  const test2 = await sendLeadNotification({
    formType: 'Site Visit Request',
    fullName: 'Sanjay Zaveri',
    phone: '+91 98251 99887',
    email: 'sanjay.zaveri@example.com',
    date: '2026-11-08',
    timeSlot: 'Morning (10:30 AM - 1:00 PM)',
    meetingType: 'Direct Site Tour in Vadodara',
    interest: 'Antica Greenwood (Gotri - Ankodia)',
    property: {
      title: 'Antica Greenwood',
      location: 'Gotri - Ankodia',
      type: '4 BHK Luxury Villa',
      priceDisplay: '₹ 10 Crore*',
      superArea: '5,800 sq.ft',
      fullAddress: 'Near Ankodia Canal Road, Off Gotri Sevasi Road, Vadodara'
    },
    message: 'Client requested an on-site villa walk-through with senior architect.',
    pageUrl: 'https://navkarrealty.com/#properties',
    submittedAt: new Date().toISOString()
  });

  if (test2.success) {
    console.log('✓ TEST 2 PASSED: Site visit request email generated successfully.');
    console.log(`  MessageId: ${test2.messageId}`);
    if (test2.previewUrl) console.log(`  Preview URL: ${test2.previewUrl}`);
    passed++;
  } else {
    console.error('✗ TEST 2 FAILED:', test2.message);
    failed++;
  }

  // Test 3: Home Loan EMI Advisory Request
  console.log('\n[TEST 3] Testing Home Loan Consultation Request...');
  const test3 = await sendLeadNotification({
    formType: 'Home Loan Assistance',
    fullName: 'Meera Trivedi',
    phone: '+91 97240 33445',
    email: 'meera.trivedi@example.com',
    date: '2026-11-10',
    timeSlot: 'Afternoon (2:00 PM - 5:00 PM)',
    meetingType: 'Office Meeting (207 Vihav Supremus 2)',
    interest: 'Home Loan Pre-Approval Advisory',
    message: 'Client requested Home Loan Assistance. Property Value: ₹ 75,00,000, Estimated Loan: ₹ 60,00,000, Monthly EMI: ₹ 52,000/mo (20 Years @ 8.5% p.a.)',
    pageUrl: 'https://navkarrealty.com/#calculator',
    submittedAt: new Date().toISOString()
  });

  if (test3.success) {
    console.log('✓ TEST 3 PASSED: Home loan advisory email generated successfully.');
    console.log(`  MessageId: ${test3.messageId}`);
    if (test3.previewUrl) console.log(`  Preview URL: ${test3.previewUrl}`);
    passed++;
  } else {
    console.error('✗ TEST 3 FAILED:', test3.message);
    failed++;
  }

  // Test 4: Validation Failure Test (Invalid phone number)
  console.log('\n[TEST 4] Testing Validation Failure Handling (Invalid phone)...');
  const test4 = await sendLeadNotification({
    formType: 'Contact Us',
    fullName: 'Test User',
    phone: '12', // too short
    email: 'invalid-email'
  });

  if (!test4.success && test4.status === 400) {
    console.log('✓ TEST 4 PASSED: Validation correctly rejected invalid input.');
    console.log(`  Errors: ${test4.message}`);
    passed++;
  } else {
    console.error('✗ TEST 4 FAILED: Expected validation failure, but got:', test4);
    failed++;
  }

  // Test 5: Spam Honeypot Trap
  console.log('\n[TEST 5] Testing Honeypot Bot Trap...');
  const test5 = await sendLeadNotification({
    formType: 'Spam Probe',
    fullName: 'Spam Bot',
    phone: '+91 99999 99999',
    website_hp: 'http://spam-link.com'
  });

  if (test5.isSpam) {
    console.log('✓ TEST 5 PASSED: Bot submission trapped successfully without dispatching spam.');
    passed++;
  } else {
    console.error('✗ TEST 5 FAILED: Honeypot did not trap spam properly:', test5);
    failed++;
  }

  console.log(`\n====================================================`);
  console.log(`TEST SUMMARY: ${passed} Passed, ${failed} Failed`);
  console.log(`Recipient: ${process.env.NOTIFICATION_RECIPIENT || 'realtynavkar61@gmail.com'}`);
  console.log(`====================================================\n`);

  if (failed > 0) process.exit(1);
}

runTests().catch(err => {
  console.error('Fatal Test Runner Error:', err);
  process.exit(1);
});

