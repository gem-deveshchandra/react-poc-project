import React from 'react'
import ProfileHeader from '../components/profile/ProfileHeader'
import TasksCard from '../components/profile/TasksCard'
import InterviewsCard from '../components/profile/InterviewsCard'
import BlockCalendarCard from '../components/profile/BlockCalendarCard'
import MeetingsCard from '../components/profile/MeetingsCard'
import PersonalInfoSection from '../components/profile/PersonalInfoSection;'



const ProfilePage = () => {
  return (
    <section className="p-4 space-y-4">
  <ProfileHeader />
  <PersonalInfoSection />
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
    <TasksCard />
    <InterviewsCard />
    <BlockCalendarCard />
    <MeetingsCard />
  </div>
</section>

  );
};

export default ProfilePage;

