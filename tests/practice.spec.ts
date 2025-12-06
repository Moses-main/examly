import { test, expect } from '@playwright/test';

test.describe('Practice Page', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the practice page
    await page.goto('http://localhost:19006/practice');
  });

  test('should display subject selection screen', async ({ page }) => {
    // Verify the main elements are visible
    await expect(page.getByText('Select a Subject')).toBeVisible();
    await expect(page.getByText('Choose a subject to start practicing')).toBeVisible();
    
    // Verify subject cards are displayed
    const subjectCards = await page.$$('[data-testid="subject-card"]');
    expect(subjectCards.length).toBeGreaterThan(0);
  });

  test('should navigate to quiz when a subject is selected', async ({ page }) => {
    // Click on the first subject card
    await page.click('[data-testid="subject-card"]:first-child');
    
    // Verify we're on the quiz screen
    await expect(page.getByRole('progressbar')).toBeVisible();
    await expect(page.getByText('Question 1 of')).toBeVisible();
  });

  test('should show correct/incorrect feedback when answering', async ({ page }) => {
    // Start the quiz
    await page.click('[data-testid="subject-card"]:first-child');
    
    // Select an answer
    await page.click('[data-testid="option-0"]');
    
    // Verify feedback is shown
    await expect(page.getByText('Explanation')).toBeVisible();
  });

  test('should show results after completing the quiz', async ({ page }) => {
    // Complete the quiz
    await page.click('[data-testid="subject-card"]:first-child');
    
    // Answer all questions
    const questions = await page.$$('[data-testid^="question-"]');
    for (let i = 0; i < questions.length; i++) {
      await page.click(`[data-testid="option-${i % 4}"]`);
      await page.click('button:has-text("Next Question")');
    }
    
    // Verify results screen
    await expect(page.getByText('Quiz Complete!')).toBeVisible();
    await expect(page.getByText('Your Score:')).toBeVisible();
  });
});
