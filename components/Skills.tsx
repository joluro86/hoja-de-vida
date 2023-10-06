interface SkillsProps {
    titulo: string;
  }
const Skills = ({titulo}:SkillsProps) => {
    return (
        <div>
            <span>{titulo}</span>                     
        </div>
    )
}
export { Skills }
