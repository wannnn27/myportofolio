import './Skills.css';

// Import tech logos
import pythonLogo from '../assets/images/icon-tech/python.png';
import tensorflowLogo from '../assets/images/icon-tech/tensorflow.png';
import pytorchLogo from '../assets/images/icon-tech/pytorch.png';
import scikitLearnLogo from '../assets/images/icon-tech/scikit-learn.png';
import dockerLogo from '../assets/images/icon-tech/docker.png';
import jupyterLogo from '../assets/images/icon-tech/jupyter.png';
import streamlitLogo from '../assets/images/icon-tech/streamlit.png';

const Skills = () => {
    const skills = [
        { name: 'Python', icon: pythonLogo },
        { name: 'TensorFlow', icon: tensorflowLogo },
        { name: 'PyTorch', icon: pytorchLogo },
        { name: 'Scikit-learn', icon: scikitLearnLogo },
        { name: 'Jupyter', icon: jupyterLogo },
        { name: 'Streamlit', icon: streamlitLogo },
        { name: 'Docker', icon: dockerLogo },
    ];

    return (
        <section className="skills section" id="skills">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">What I Know</span>
                    <h2 className="section-title">Machine Learning Stack</h2>
                </div>

                <div className="skills-grid-simple">
                    {skills.map((skill, idx) => (
                        <div className="skill-card" key={idx}>
                            <img src={skill.icon} alt={skill.name} className="skill-logo" />
                            <span className="skill-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
