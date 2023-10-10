interface SkillsProps {
    titulo: string;
  }
const Skills = ({titulo}:SkillsProps) => {
    return (
        <div>
            <span className="font-medium color_letra">{titulo}</span>                     
        </div>
    )
}
export { Skills }
