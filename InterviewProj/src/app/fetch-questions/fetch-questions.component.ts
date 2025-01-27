import { Component } from '@angular/core';

@Component({
  selector: 'app-fetch-questions',
  templateUrl: './fetch-questions.component.html',
  styleUrls: ['./fetch-questions.component.scss'],
})
export class FetchQuestionsComponent {
  // Filter fields
  dateOfInterview: Date | null = null;
  interviewType: string = '';
  clientVendorName: string = '';
  interviewRound: string = '';

  // Table data
  fetchedQuestions: any[] = []; // This will hold the questions fetched
  displayedColumns: string[] = ['id', 'question', 'actions']; // Table columns

  constructor() {}

  // Mock function to simulate fetching questions
  fetchQuestions() {
    // Simulating data fetch based on the filters
    console.log('Fetching questions with filters:', {
      dateOfInterview: this.dateOfInterview,
      interviewType: this.interviewType,
      clientVendorName: this.clientVendorName,
      interviewRound: this.interviewRound,
    });

    // Replace this with an actual API call
    this.fetchedQuestions = [
      { id: 1, question: 'What are your strengths?' },
      { id: 2, question: 'Describe a challenging situation you handled.' },
      { id: 3, question: 'How do you handle tight deadlines?' },
    ];
  }

  // Action to delete a question
  deleteQuestion(id: number) {
    this.fetchedQuestions = this.fetchedQuestions.filter((q) => q.id !== id);
  }

  // Clear the filter inputs
  clearFilters() {
    this.dateOfInterview = null;
    this.interviewType = '';
    this.clientVendorName = '';
    this.interviewRound = '';
    this.fetchedQuestions = []; // Clear the fetched questions
  }
}
