import TeamMemberCard from './TeamMemberCard';

const TeamMembers = ({ employees, handleEmp, selectedTeam }) => {
  return (
    employees.map((employee) => (
      <TeamMemberCard employee={employee} handleEmp={handleEmp} selectedTeam={selectedTeam} />
    ))
  )
}
export default TeamMembers;