import React from 'react';

const detailedDoctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    education: "MD, Harvard Medical School; Fellowship in Cardiology at Johns Hopkins",
    experience: "15 years",
    bio: "Dr. Johnson specializes in preventive cardiology and heart disease management. She's passionate about helping patients maintain heart health through lifestyle changes and advanced treatments.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    education: "MD, Stanford University; Neurology Residency at Mayo Clinic",
    experience: "12 years",
    bio: "Dr. Chen is an expert in treating neurological disorders including migraines, epilepsy, and Parkinson's disease. He takes a patient-centered approach to neurological care.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    education: "MD, University of California; Pediatric Residency at Boston Children's Hospital",
    experience: "8 years",
    bio: "Dr. Rodriguez provides compassionate care for children from birth through adolescence. She focuses on preventive care and early intervention for childhood conditions.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    education: "MD, Columbia University; Orthopedic Surgery Residency at Hospital for Special Surgery",
    experience: "18 years",
    bio: "Dr. Wilson specializes in sports medicine and joint replacement. He helps patients recover from injuries and maintain mobility through surgical and non-surgical treatments.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];

const DoctorsPage = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Meet Our Doctors</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Our team of board-certified physicians brings expertise, compassion, and dedication to every patient encounter.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {detailedDoctors.map((doctor, index) => (
            <div key={index} className="bg-blue-50 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
              <img src={doctor.image} alt={doctor.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-800">{doctor.name}</h3>
                <p className="text-blue-600 mb-2">{doctor.specialty}</p>
                <p className="text-gray-600 text-sm mb-4">{doctor.experience} of experience</p>
                <button className="btn-primary w-full">View Profile</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          {detailedDoctors.map((doctor, index) => (
            <div key={index} className="mb-16">
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <img src={doctor.image} alt={doctor.name} className="w-full md:w-48 h-64 object-cover rounded-lg" />
                <div>
                  <h3 className="text-2xl font-semibold text-blue-800 mb-2">{doctor.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{doctor.specialty}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-1">Education</h4>
                    <p className="text-gray-600">{doctor.education}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Experience</h4>
                    <p className="text-gray-600">{doctor.experience}</p>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">About Dr. {doctor.name.split(' ')[1]}</h4>
                <p className="text-gray-600">{doctor.bio}</p>
              </div>
              <button className="btn-primary">Book Appointment</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;