interface Quater {
  quaterNo: string;
  quaterName: string;
  quaterDuration: string;
  courseDescription: string;
  courseOutline: CourseOutline[];
  quaterBreakTasks: QuaterBreakTasks;
}

interface CourseOutline {
  sr: string;
  mainTitle: string;
  messages: string[];
  links: CQLink[];
  topicsCovered: TopicsCoveredLink[];
}


interface QuaterBreakTasks {
  message: string;
  studyMaterialLinks: string[];
  assignmentHeading: string;
  assignments: AssignmentsLink[];
  quizzes: QuizzLink[];
}

interface CQLink {
  title: string;
  type: string;
  link: string;
}

interface TopicsCoveredLink {
  topic: string;
  link: string;
  note: string;
}


interface AssignmentsLink {
  title: string;
  subtitle: string;
  link: string;
}

interface Marking {
  totalQuestions: string;
  totalTime: string;
}

interface QuizzLink {
  title: string;
  marking: Marking;
  studyLinks: CQLink[];
}



