import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserCircle, BarChart, Users, Calendar, Check } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface TabProps {
  active: string;
  onTabChange: (tab: string) => void;
}

const DemoTabs: React.FC<TabProps> = ({ active, onTabChange }) => {
  const tabs = [
    { id: 'student', label: 'Student View', icon: <UserCircle size={18} /> },
    { id: 'faculty', label: 'Faculty View', icon: <Users size={18} /> },
    { id: 'admin', label: 'Admin Dashboard', icon: <BarChart size={18} /> },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex items-center px-6 py-3 rounded-lg border font-medium transition-all ${
            active === tab.id
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-gray-700 border-gray-200 hover:border-blue-600 hover:text-blue-600'
          }`}
        >
          <span className="mr-2">{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </div>
  );
};

// Mock data
const studentAttendanceData = [
  { date: 'Jan', attendance: 90 },
  { date: 'Feb', attendance: 85 },
  { date: 'Mar', attendance: 92 },
  { date: 'Apr', attendance: 88 },
  { date: 'May', attendance: 95 },
  { date: 'Jun', attendance: 90 },
];

const courses = [
  { id: 1, code: 'CS401', name: 'Artificial Intelligence', attendance: 92, total: 25, present: 23 },
  { id: 2, code: 'CS402', name: 'Machine Learning', attendance: 88, total: 32, present: 28 },
  { id: 3, code: 'CS403', name: 'Prototype Modelling', attendance: 96, total: 28, present: 27 },
  { id: 4, code: 'CS404', name: 'Cloud Computing', attendance: 84, total: 25, present: 21 },
];

const classAttendanceData = [
  { date: 'Mon', present: 42, total: 45 },
  { date: 'Tue', present: 40, total: 45 },
  { date: 'Wed', present: 45, total: 45 },
  { date: 'Thu', present: 38, total: 45 },
  { date: 'Fri', present: 43, total: 45 },
];

const DemoPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('student');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginType, setLoginType] = useState('');

  const handleLogin = (type: string) => {
    setIsLoggedIn(true);
    setLoginType(type);
    setActiveTab(type);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginType('');
  };

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionHeader
          title="Interactive Demo Portal"
          subtitle="Experience our attendance system through this interactive demo. Choose a user role to explore different interfaces."
        />

        {!isLoggedIn ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto mt-12 bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="bg-blue-700 p-6 text-white text-center">
              <h3 className="text-xl font-bold">Demo Login</h3>
              <p className="text-blue-100 mt-1">Select a user type to continue</p>
            </div>
            <div className="p-6 space-y-4">
              <button
                onClick={() => handleLogin('student')}
                className="w-full p-4 rounded-lg border border-gray-200 text-left hover:border-blue-500 transition-colors flex items-center"
              >
                <UserCircle className="text-blue-600 mr-3" size={24} />
                <div>
                  <div className="font-medium">Student Access</div>
                  <div className="text-sm text-gray-600">View your attendance records</div>
                </div>
              </button>
              
              <button
                onClick={() => handleLogin('faculty')}
                className="w-full p-4 rounded-lg border border-gray-200 text-left hover:border-blue-500 transition-colors flex items-center"
              >
                <Users className="text-blue-600 mr-3" size={24} />
                <div>
                  <div className="font-medium">Faculty Access</div>
                  <div className="text-sm text-gray-600">Manage class attendance</div>
                </div>
              </button>
              
              <button
                onClick={() => handleLogin('admin')}
                className="w-full p-4 rounded-lg border border-gray-200 text-left hover:border-blue-500 transition-colors flex items-center"
              >
                <BarChart className="text-blue-600 mr-3" size={24} />
                <div>
                  <div className="font-medium">Administrator Access</div>
                  <div className="text-sm text-gray-600">View system analytics</div>
                </div>
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="mt-12">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-gray-900">
                {activeTab === 'student' ? 'Student Dashboard' : 
                 activeTab === 'faculty' ? 'Faculty Portal' : 'Administrative Dashboard'}
              </h3>
              <Button 
                variant="outline" 
                onClick={handleLogout}
                className="text-sm"
              >
                Log Out
              </Button>
            </div>

            <DemoTabs active={activeTab} onTabChange={setActiveTab} />

            {activeTab === 'student' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center">
                    <img
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Student Profile"
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Raj Patel</h4>
                      <p className="text-gray-600">ID: ST20250089 • Computer Science</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h5 className="font-semibold text-gray-900 mb-4">Attendance Overview</h5>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={studentAttendanceData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="attendance" 
                          stroke="#3B82F6" 
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="mt-8">
                    <h5 className="font-semibold text-gray-900 mb-4">Course Attendance</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                          <tr>
                            <th className="px-6 py-3">Course</th>
                            <th className="px-6 py-3">Code</th>
                            <th className="px-6 py-3">Attendance</th>
                            <th className="px-6 py-3">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {courses.map((course) => (
                            <tr key={course.id} className="border-b">
                              <td className="px-6 py-4 font-medium">{course.name}</td>
                              <td className="px-6 py-4">{course.code}</td>
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                    <div 
                                      className="bg-blue-600 h-2.5 rounded-full" 
                                      style={{ width: `${course.attendance}%` }}
                                    ></div>
                                  </div>
                                  <span>{course.attendance}%</span>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  course.attendance >= 90 
                                    ? 'bg-green-100 text-green-800' 
                                    : course.attendance >= 75 
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-red-100 text-red-800'
                                }`}>
                                  {course.attendance >= 90 
                                    ? 'Excellent' 
                                    : course.attendance >= 75 
                                    ? 'Good'
                                    : 'At Risk'}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'faculty' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">CS401: Computer Vision</h4>
                      <p className="text-gray-600">Today's Attendance • May 15, 2025</p>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={20} className="text-gray-500 mr-2" />
                      <span className="text-gray-700">10:30 AM - 12:30 PM</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium flex items-center">
                        <Check size={16} className="mr-1" /> Attendance Complete
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium text-gray-900 mr-2">42/45 Students Present</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full" 
                          style={{ width: '93%' }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h5 className="font-semibold text-gray-900 mb-4">Weekly Attendance</h5>
                    <div className="h-72">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={classAttendanceData}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis domain={[0, 50]} />
                          <Tooltip />
                          <Line 
                            type="monotone" 
                            dataKey="present" 
                            stroke="#3B82F6" 
                            strokeWidth={2}
                            dot={{ r: 4 }}
                            activeDot={{ r: 6 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-4">Student Attendance Log</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                          <tr>
                            <th className="px-6 py-3">Student ID</th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Time</th>
                            <th className="px-6 py-3">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { id: "ST20250012", name: "Priya Sharma", time: "10:28 AM", status: "Present" },
                            { id: "ST20250034", name: "Aditya Patel", time: "10:29 AM", status: "Present" },
                            { id: "ST20250056", name: "Neha Singh", time: "10:30 AM", status: "Present" },
                            { id: "ST20250078", name: "Rohan Kumar", time: "10:31 AM", status: "Present" },
                            { id: "ST20250090", name: "Ananya Desai", time: "-", status: "Absent" }
                          ].map((student, i) => (
                            <tr key={i} className="border-b">
                              <td className="px-6 py-4 font-medium">{student.id}</td>
                              <td className="px-6 py-4">{student.name}</td>
                              <td className="px-6 py-4">{student.time}</td>
                              <td className="px-6 py-4">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  student.status === 'Present' 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-red-100 text-red-800'
                                }`}>
                                  {student.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'admin' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="p-6 border-b border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900">Administrative Dashboard</h4>
                  <p className="text-gray-600">System-wide attendance analytics and management</p>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                      { label: "Total Students", value: "2,543", color: "bg-blue-100 text-blue-800" },
                      { label: "Today's Attendance", value: "93.7%", color: "bg-green-100 text-green-800" },
                      { label: "At-Risk Students", value: "124", color: "bg-yellow-100 text-yellow-800" }
                    ].map((item, i) => (
                      <div key={i} className="bg-white rounded-lg border border-gray-200 p-6">
                        <div className={`text-sm font-medium mb-1 ${item.color} inline-block px-2 py-0.5 rounded`}>
                          {item.label}
                        </div>
                        <div className="text-3xl font-bold text-gray-900">{item.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-8">
                    <h5 className="font-semibold text-gray-900 mb-4">Department Attendance Overview</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                          <tr>
                            <th className="px-6 py-3">Department</th>
                            <th className="px-6 py-3">Average Attendance</th>
                            <th className="px-6 py-3">This Week</th>
                            <th className="px-6 py-3">Last Week</th>
                            <th className="px-6 py-3">Change</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { dept: "Computer Science", avg: "92.3%", thisWeek: "94.1%", lastWeek: "90.5%", change: "+3.6%" },
                            { dept: "Electrical Engineering", avg: "88.7%", thisWeek: "89.2%", lastWeek: "88.1%", change: "+1.1%" },
                            { dept: "Mechanical Engineering", avg: "85.4%", thisWeek: "84.7%", lastWeek: "86.1%", change: "-1.4%" },
                            { dept: "Civil Engineering", avg: "90.1%", thisWeek: "91.5%", lastWeek: "88.7%", change: "+2.8%" },
                          ].map((dept, i) => (
                            <tr key={i} className="border-b">
                              <td className="px-6 py-4 font-medium">{dept.dept}</td>
                              <td className="px-6 py-4">{dept.avg}</td>
                              <td className="px-6 py-4">{dept.thisWeek}</td>
                              <td className="px-6 py-4">{dept.lastWeek}</td>
                              <td className="px-6 py-4">
                                <span className={`${
                                  dept.change.startsWith('+') 
                                    ? 'text-green-600' 
                                    : 'text-red-600'
                                } font-medium`}>
                                  {dept.change}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-4">System Status</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { label: "Database", status: "Operational", color: "bg-green-100 text-green-800" },
                        { label: "Recognition API", status: "Operational", color: "bg-green-100 text-green-800" },
                        { label: "Student Portal", status: "Operational", color: "bg-green-100 text-green-800" },
                        { label: "Faculty Portal", status: "Maintenance", color: "bg-yellow-100 text-yellow-800" }
                      ].map((item, i) => (
                        <div key={i} className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                          <span className="font-medium text-gray-700">{item.label}</span>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${item.color}`}>
                            {item.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </Container>
    </section>
  );
};

export default DemoPortal;