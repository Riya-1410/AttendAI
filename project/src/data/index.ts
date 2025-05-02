import { FeatureType, TeamMemberType, TestimonialType, StatType, FaqType, ProcessStepType } from '../types';
import { Scan, UserCheck, Clock, Database, Users, Lock, BarChart, Camera, Server, Laptop, CheckCircle, CloudCog as CloudComputing } from 'lucide-react';

export const features: FeatureType[] = [
  {
    id: 1,
    title: 'AI-Based Face Recognition',
    description: 'Advanced facial recognition algorithms that accurately identify students with high precision, even with varied appearances.',
    icon: 'Scan'
  },
  {
    id: 2,
    title: 'Elimination of Proxy Attendance',
    description: 'Prevents fraudulent attendance through biometric verification, ensuring only physically present students are marked.',
    icon: 'UserCheck'
  },
  {
    id: 3,
    title: 'Real-time Processing',
    description: 'Instantaneous identification and attendance marking with immediate updates to the attendance database.',
    icon: 'Clock'
  },
  {
    id: 4,
    title: 'Cloud-Based Database',
    description: 'Secure cloud storage for attendance records with redundancy and easy access for authorized personnel.',
    icon: 'Database'
  },
  {
    id: 5,
    title: 'Student & Faculty Portals',
    description: 'Dedicated interfaces for students to view their attendance and for faculty to manage class records.',
    icon: 'Users'
  },
  {
    id: 6,
    title: 'Tamper-Proof Authentication',
    description: 'Secure system with multiple authentication layers to prevent unauthorized access and data manipulation.',
    icon: 'Lock'
  },
  {
    id: 7,
    title: 'Advanced Analytics',
    description: 'Comprehensive reporting tools providing insights into attendance patterns and identifying at-risk students.',
    icon: 'BarChart'
  },
  {
    id: 8,
    title: 'LMS Integration',
    description: 'Seamless integration with existing Learning Management Systems for consolidated educational data.',
    icon: 'Laptop'
  }
];

export const team: TeamMemberType[] = [
  {
    id: 1,
    name: 'Riya Devaliya',
    role: '',
    image: ''
  },
  {
    id: 2,
    name: 'Richa Devaliya',
    role: '',
    image: ''
  },
  {
    id: 3,
    name: 'Mahi Patel',
    role: '',
    image: ''
  },
  {
    id: 4,
    name: 'Mrs. Rucha Patel',
    role: '',
    image: ''
  }
];

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: 'Dr. Ajay Kumar Vyas',
    role: 'Department Head, Computer Science',
    quote: 'This IoT-based attendance system has transformed how we track student presence. The time savings and accuracy improvements are remarkable.',
    avatar: ''
  },
  {
    id: 2,
    name: 'Prof. Rucha Patel',
    role: 'Associate Professor, Engineering',
    quote: 'The elimination of proxy attendance has significantly improved classroom engagement and participation. Highly recommended!',
    avatar: ''
  },
  {
    id: 3,
    name: 'Dr. Hitesj Chikniwala',
    role: 'Dean of Academic Affairs',
    quote: 'The analytics provided by this system help us identify at-risk students earlier and provide timely interventions. A truly valuable tool.',
    avatar: ''
  }
];

export const stats: StatType[] = [
  {
    id: 1,
    value: 60,
    label: 'Time Saved in Attendance Taking',
    suffix: '%'
  },
  {
    id: 2,
    value: 99,
    label: 'Accuracy in Student Identification',
    suffix: '%'
  },
  {
    id: 3,
    value: 90,
    label: 'Reduction in Proxy Attendance',
    suffix: '%'
  },
  {
    id: 4,
    value: 100,
    label: 'Faculty Satisfaction',
    suffix: '%'
  }
];

export const faqs: FaqType[] = [
  {
    id: 1,
    question: 'How accurate is the facial recognition system?',
    answer: 'Our system achieves 99% accuracy in controlled environments with proper lighting. The AI algorithms are trained to recognize students even with minor appearance changes like glasses or different hairstyles.'
  },
  {
    id: 2,
    question: 'What hardware is required to implement this system?',
    answer: 'The basic setup requires an HD camera (minimum 720p resolution), a processing unit (computer or Raspberry Pi), and internet connectivity. For larger classrooms, multiple cameras may be necessary for complete coverage.'
  },
  {
    id: 3,
    question: 'How is student privacy protected?',
    answer: 'The system only stores facial recognition data points, not actual images. All data is encrypted and access is strictly controlled through role-based permissions. Compliance with educational data privacy regulations is built into the system.'
  },
  {
    id: 4,
    question: 'Can the system work offline?',
    answer: 'The system can capture attendance data offline and sync with the database once internet connectivity is restored. However, real-time features like instant notifications require an active internet connection.'
  },
  {
    id: 5,
    question: 'How long does it take to implement the system in a new institution?',
    answer: 'A basic implementation can be completed in 2-4 weeks, including hardware setup, software installation, and training. Full integration with existing systems may take an additional 2-3 weeks depending on complexity.'
  },
  {
    id: 6,
    question: 'Is the system compatible with existing student databases?',
    answer: 'Yes, the system is designed with API integration capabilities that allow it to connect with most standard Student Information Systems and Learning Management Systems.'
  }
];

export const processSteps: ProcessStepType[] = [
  {
    id: 1,
    title: 'Camera Captures Classroom',
    description: 'High-definition cameras scan the classroom to capture faces of all present students.',
    icon: 'Camera'
  },
  {
    id: 2,
    title: 'AI Processes Images',
    description: 'Facial recognition algorithms analyze captured images and identify individual students.',
    icon: 'Scan'
  },
  {
    id: 3,
    title: 'Server Verification',
    description: 'Identified faces are matched against the database of enrolled students for verification.',
    icon: 'Server'
  },
  {
    id: 4,
    title: 'Attendance Marked',
    description: 'Verified students are automatically marked present in the attendance system.',
    icon: 'CheckCircle'
  },
  {
    id: 5,
    title: 'Data Synchronized',
    description: 'Attendance records are synchronized to the cloud database in real-time.',
    icon: 'CloudComputing'
  }
];