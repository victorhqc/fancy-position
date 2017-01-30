const seniorities = [
  'Lead',
  'Jr',
  'Senior',
  'Mid',
  'Advanced',
  'Guru',
  'Chief',
  'Intern',
];

const titles = [
  'Backend',
  'Frontend',
  'Fullstack',
  'Project',
  'Automation',
  'Testing',
  'Operator',
  'Generation',
  'Analyst',
  'Designer',
  'UX/UI',
  'Node.js',
  'PHP',
  'Go',
  'JavaScript',
  'C#',
  'Ruby',
  'Python',
  'Security',
];

const specialization = [
  'Developer',
  'Manager',
  'Specialist',
  'Evangelist',
  'Ninja',
  'Enthusiast',
  'Expert',
  'Wizard',
  'Hacker',
  'Master',
];

const getRandom = arr => {
  return arr[
    Math.floor(Math.random() * arr.length)
  ];
}

module.exports = () => `${getRandom(seniorities)} ${getRandom(titles)} ${getRandom(specialization)}`;
