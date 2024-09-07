
const MathSixThGradePage = () => {
  // Sample data for video collection
  const videoCollection = [
    { id: 1, title: 'Introduction to Programming', thumbnail: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Advanced Algorithms', thumbnail: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Data Structures Basics', thumbnail: 'https://via.placeholder.com/150' },
    // Add more videos as needed...
  ];

  // Sample data for the main video
  const mainVideo = {
    title: 'Introduction to Programming',
    subtopics: ['Variables', 'Data Types', 'Control Flow'],
    videoUrl: 'https://www.example.com/sample-video.mp4', // Replace with actual video URL
    description: 'This video covers the basics of programming, including variables, data types, and control flow. Learn the foundational concepts to start coding effectively.',
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Learning Platform</h1>
          <nav className="space-x-4">
            <button className="hover:text-gray-200">Home</button>
            <button className="hover:text-gray-200">Courses</button>
            <button className="hover:text-gray-200">Login</button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-1">
        {/* Video Page Layout */}
        <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
          {/* First Row */}
          <div className="grid grid-cols-1 gap-6 col-span-5">
            {/* Right Column: Main Video Player */}
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
              <h2 className="text-2xl font-semibold mb-4">{mainVideo.title}</h2>
              <div className="flex-grow mb-4">
                <video controls className="w-full h-80 bg-black">
                  <source src={mainVideo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-xl font-semibold mb-2">Subtopics</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {mainVideo.subtopics.map((subtopic, index) => (
                  <li key={index}>{subtopic}</li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Take Test</button>
            </div>
          </div>

          {/* Left Column: Video Collection */}
          <div className="bg-white rounded-lg shadow-md p-4 col-span-3">
              <h2 className="text-2xl font-semibold mb-4">Course Collection</h2>
              <div className="grid grid-cols-1 gap-4">
                {videoCollection.map((video,i) => (
                  <div key={video.id} className="bg-gray-100 rounded-lg overflow-hidden flex">
                    <img src={video.thumbnail} alt={video.title} className="w-44 h-28 object-cover" />
                    <div className="p-2">
                      <span className="text-sm font-semibold">{`${i+1}.  `}{video.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          {/* Second Row: Video Information */}
          <div className="col-span-1 md:col-span-8 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-2xl font-semibold mb-4">About the Video</h2>
            <p className="text-gray-600">{mainVideo.description}</p>
          </div>
        </div>
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

export default MathSixThGradePage;
