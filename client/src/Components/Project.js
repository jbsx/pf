import '../CSS/Project.css'

const Project = ({data})=>{

    return (
        <div id="project">
            <div className='split'>
                <div id='title'>{data.title}</div>
                <div id='tags'> { data.tags.map(n=>{ 
                    return <img key={n} src={require(`../Assets/${n}.png`).default} ></img> }
                )} </div>
            </div>
            <div className='split'>
                <div id='desc'>{data.desc}</div>
                <div id='buttons'>
                    {data.url && <button><a href={data.url}><img alt='hyperlink-icon' src={require("../Assets/Hyperlink.png").default}/></a></button>}
                    {data.repo && <button><a href={data.repo}><img alt='git-logo' src={require("../Assets/GitHub.png").default}/></a></button>}
                </div>
            </div>
        </div>
    )
}

export default Project
