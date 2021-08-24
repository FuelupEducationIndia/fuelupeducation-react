import React from 'react';

import TabulatedGrades from '../TabulatedGrades/TabulatedGrades';

const CheckGrades = props => {

    var tabledata = [
      {
        Coures: 'SS2021 - The Solar System',
        Instructor: 'Sam Smith',
        'Student/Groups': 'LastName FirstName',
        Folder: 'Assignment-1 Submission',
        Submissions: 'LastName_Assign1_AssignName.pdf',
        Grades: '26/30',
        Status: 'Approved'
      },
      {
        Coures: 'AA2021 - The Solar System',
        Instructor: 'Sam Smith',
        'Student/Groups': 'LastName FirstName',
        Folder: 'Assignment-1 Submission',
        Submissions: 'LastName_Assign1_AssignName.pdf',
        Grades: '26/30',
        Status: 'Approved'
      },
      {
        Coures: 'AA2021 - The Solar System',
        Instructor: 'Sam Smith',
        'Student/Groups': 'LastName FirstName',
        Folder: 'Assignment-1 Submission',
        Submissions: 'LastName_Assign1_AssignName.pdf',
        Grades: '',
        Status: 'Pending'
      },
      {
        Coures: 'AA2021 - The Solar System',
        Instructor: 'Sam Smith',
        'Student/Groups': 'LastName FirstName',
        Folder: 'Assignment-1 Submission',
        Submissions: 'LastName_Assign1_AssignName.pdf',
        Grades: '10/30',
        Status: 'Failed'
      },
      {
        Coures: 'AA2021 - The Solar System',
        Instructor: 'Sam Smith',
        'Student/Groups': 'LastName FirstName',
        Folder: 'Assignment-1 Submission',
        Submissions: 'LastName_Assign1_AssignName.pdf',
        Grades: '26/30',
        Status: 'Approved'
      },
      {
        Coures: 'AA2021 - The Solar System',
        Instructor: 'Sam Smith',
        'Student/Groups': 'LastName FirstName',
        Folder: 'Assignment-1 Submission',
        Submissions: 'LastName_Assign1_AssignName.pdf',
        Grades: '26/30',
        Status: 'Approved'
      }
    ]
  return (
    <TabulatedGrades tabledata={tabledata} />
  )
    
}; 

CheckGrades.propTypes = {}

export default CheckGrades;