import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate=useNavigate()
  // Sample data for school and college students, recommended courses, and roadmaps
  const schoolClasses = [
    {
      grade: 'Grade 6',
      courses: [
        { id: 1, title: 'Basic Math Concepts', description: 'Introduction to basic math principles.', image: 'https://via.placeholder.com/300' },
        { id: 2, title: 'Introduction to Science', description: 'Exploring the basics of science.', image: 'https://via.placeholder.com/300' },
        { id: 3, title: 'Introduction to Social science', description: 'Exploring our history.', image: 'https://via.placeholder.com/300' },
        { id: 4, title: 'Sanskrit', description: 'Learn oldest and perfect langauge.', image: 'https://via.placeholder.com/300' },
      ],
    },
    // {
    //   grade: 'Grade 7',
    //   courses: [
    //     { id: 1, title: 'Algebra Basics', description: 'Understanding the fundamentals of algebra.', image: 'https://via.placeholder.com/300' },
    //     { id: 2, title: 'Life Science', description: 'Learning about living organisms.', image: 'https://via.placeholder.com/300' },
    //   ],
    // },
    // {
    //   grade: 'Grade 8',
    //   courses: [
    //     { id: 1, title: 'Geometry Essentials', description: 'Introduction to shapes, angles, and geometry.', image: 'https://via.placeholder.com/300' },
    //     { id: 2, title: 'Physical Science', description: 'Studying the principles of physics and chemistry.', image: 'https://via.placeholder.com/300' },
    //   ],
    // },
  ];

  const collegeStreams = [
    {
      stream: 'Computer Science',
      courses: [
        { id: 1, title: 'Introduction to Programming', description: 'Basics of programming using Python.', image: 'https://via.placeholder.com/300' },
        { id: 2, title: 'Data Structures and Algorithms', description: 'Understanding core data structures and algorithms.', image: 'https://via.placeholder.com/300' },
        { id: 3, title: 'Basic of web dev', description: 'Exploring web developent.', image: 'https://via.placeholder.com/300' },
        { id: 3, title: 'machine learning', description: 'train machine with machine learning.', image: 'https://via.placeholder.com/300' },
      ],
    },
    // {
    //   stream: 'Electrical Engineering',
    //   courses: [
    //     { id: 1, title: 'Circuit Theory', description: 'Fundamentals of electrical circuits.', image: 'https://via.placeholder.com/300' },
    //     { id: 2, title: 'Electromagnetics', description: 'Study of electromagnetic fields and waves.', image: 'https://via.placeholder.com/300' },
    //   ],
    // },
    // {
    //   stream: 'Mechanical Engineering',
    //   courses: [
    //     { id: 1, title: 'Thermodynamics', description: 'Principles of energy and heat transfer.', image: 'https://via.placeholder.com/300' },
    //     { id: 2, title: 'Fluid Mechanics', description: 'Study of fluid behavior and applications.', image: 'https://via.placeholder.com/300' },
    //   ],
    // },
  ];

  const recommendedCourses = [
    { id: 1, title: 'Coding for Beginners', description: 'Start your coding journey.', image: 'https://via.placeholder.com/300' },
    { id: 2, title: 'AI and Machine Learning', description: 'Introduction to AI and ML concepts.', image: 'https://via.placeholder.com/300' },
    { id: 3, title: 'Javascript', description: 'Introduction javascript.', image: 'https://via.placeholder.com/300' },
  ];

  const roadmaps = [
    {
      id: 1,
      title: 'Roadmap to Becoming a Data Scientist',
      steps: [
        'Learn Basic Mathematics and Statistics',
        'Get a Bachelor’s Degree in Computer Science, Data Science, or Related Field',
        'Learn Programming Languages (Python, R, SQL)',
        'Master Data Manipulation and Analysis with Pandas and NumPy',
        'Learn Data Visualization Tools (Matplotlib, Seaborn)',
        'Study Machine Learning Algorithms',
        'Work on Real-World Data Science Projects',
        'Pursue Internships or Entry-Level Data Analyst Roles',
        'Get a Master’s Degree (Optional but Beneficial)',
        'Build a Strong Portfolio and Network',
        'Apply for Data Scientist Positions',
      ],
    },
    {
      id: 2,
      title: 'Roadmap to Becoming an Astronaut',
      steps: [
        'Excel in STEM Subjects in School (Science, Technology, Engineering, Mathematics)',
        'Get a Bachelor’s Degree in Engineering, Physical Science, Mathematics, or Biological Science',
        'Gain Professional Experience in a Technical Field (e.g., Engineering, Piloting)',
        'Develop Physical Fitness and Pass NASA’s Astronaut Physical Test',
        'Pursue a Master’s Degree or Doctorate (Optional but Highly Valued)',
        'Gain Experience in Leadership and Teamwork',
        'Learn Survival Skills (Underwater Training, Scuba Diving)',
        'Apply for NASA or Other Space Agency’s Astronaut Training Program',
        'Complete Astronaut Training Program (Spacewalking, Robotics, Flight Training)',
        'Be Selected for a Space Mission',
      ],
    },
    {
      id: 3,
      title: 'Roadmap to Becoming a Pilot',
      steps: [
        'Complete High School with Strong Grades, Especially in Math and Physics',
        'Obtain a Private Pilot License (PPL)',
        'Log Flight Hours and Gain Experience',
        'Pursue a Bachelor’s Degree (Aviation-Related Field Preferred)',
        'Earn a Commercial Pilot License (CPL)',
        'Gain Additional Ratings (Instrument, Multi-Engine)',
        'Get Certified as a Flight Instructor to Build Flight Hours',
        'Apply for Jobs with Regional Airlines or Charter Companies',
        'Accumulate Flight Hours and Experience',
        'Apply for Major Airline Pilot Positions',
      ],
    },
    {
      id: 4,
      title: 'Roadmap to Becoming an Aeronautical Engineer',
      steps: [
        'Excel in Mathematics, Physics, and Computer Science in High School',
        'Get a Bachelor’s Degree in Aeronautical Engineering or Aerospace Engineering',
        'Learn CAD Software and Engineering Tools (e.g., MATLAB, CATIA)',
        'Work on Engineering Projects and Internships',
        'Develop Skills in Aerodynamics, Propulsion, and Flight Mechanics',
        'Pursue a Master’s Degree (Optional but Advantageous)',
        'Gain Professional Experience in the Aerospace Industry',
        'Obtain Professional Engineer (PE) License (Depending on Country)',
        'Specialize in Areas like Aircraft Design, Avionics, or Propulsion Systems',
        'Advance to Senior Engineering Roles or Research Positions',
      ],
    },
    {
      id: 5,
      title: 'Roadmap to Becoming a Foreign Minister',
      steps: [
        'Pursue Studies in Political Science, International Relations, or Law',
        'Develop Strong Communication and Public Speaking Skills',
        'Gain Experience in Diplomatic Services or Government Roles',
        'Study Foreign Languages and Cultures',
        'Work on Building a Network with International Contacts',
        'Participate in International Conferences and Forums',
        'Gain Experience in Leadership Roles in Government or International Organizations',
        'Stay Informed About Global Affairs and International Policies',
        'Run for Political Office or Appointed to Diplomatic Positions',
        'Be Appointed or Elected as Foreign Minister',
      ],
    },
  ];


  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Learning Platform</h1>
          <nav className="space-x-4">
            <button className="hover:text-gray-200">Home</button>
            <button className="hover:text-gray-200">Courses</button>
            <button className="hover:text-gray-200">Roadmap</button>
            <button className="hover:text-gray-200">Login</button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-1">
        {/* Introduction Section */}
        <section className="text-center mb-12 h-80 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our Learning Platform</h2>
          <p className="text-lg text-gray-600 mb-6">
            Explore our wide range of courses and start learning today!
          </p>
          <div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Get Started
          </button>
          </div>
        </section>

        {/* School Courses by Class Section */}
        {schoolClasses.map((schoolClass) => (
          <section key={schoolClass.grade} className="mb-12">
            <h3 className="text-3xl font-semibold mb-6">{schoolClass.grade} Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {schoolClass.courses.map((course) => (
                <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="text-xl font-semibold">{course.title}</h4>
                    <p className="text-gray-600 mt-2">{course.description}</p>
                    <button className="mt-4 border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition" onClick={()=>navigate('/enginnering/programming')}>see course</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* College Courses by Stream Section */}
        {collegeStreams.map((stream) => (
          <section key={stream.stream} className="mb-12">
            <h3 className="text-3xl font-semibold mb-6">{stream.stream} Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {stream.courses.map((course) => (
                <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="text-xl font-semibold">{course.title}</h4>
                    <p className="text-gray-600 mt-2">{course.description}</p>
                    <button className="mt-4 border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition">Learn More</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}


        {/* Recommended Courses Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-semibold mb-6">Recommended Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="text-xl font-semibold">{course.title}</h4>
                  <p className="text-gray-600 mt-2">{course.description}</p>
                  <button className="mt-4 border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmaps Section */}
        <section>
          <h3 className="text-3xl font-semibold mb-6">Roadmaps for Your Stream</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roadmaps.map((roadmap) => (
              <div key={roadmap.id} className="bg-white rounded-lg shadow-md p-4">
                <h4 className="text-xl font-semibold mb-2">{roadmap.title}</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {roadmap.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          © 2024 Learning Platform. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
