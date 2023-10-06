interface SkillProps {
    skill: string;
    porcentaje: string;
    barraClaseAdicional?: string;
}
const Skill = ({ skill, porcentaje, barraClaseAdicional }: SkillProps) => {
    return (
        <div>
            <div className="flex justify-between">
                <span>{skill}</span>
                <span>{porcentaje}</span>
            </div>
            <div className="div_barra" >
                <div className={`barra_porcentaje ${barraClaseAdicional}`}></div>
            </div>
        </div>
    )
}
export { Skill }