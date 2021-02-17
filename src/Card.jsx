import Select from 'react-select'
import examssvg from './svg/examssvg2.svg'


const Card = () => {

    const sectionselect = [
        {
            value : 1 ,
            label : "Section 1 : Bacteria and fungi"
        },
        {
            value : 2 ,
            label : "Section 1 : Bacteria and fungi"
        },
        {
            value : 3 ,
            label : "Section 1 : Bacteria and fungi"
        }
    ]

    return(
        <>
            <div className="bigcard">
                <div className="leftofcard">
                    <div className="savedsection">
                        <h3>Exams</h3>
                    </div>
                    <div className="select2">
                        <p>select saved section</p>
                        <Select 
                            options={sectionselect}
                            placeholder="section"
                            />
                    </div>
                    <div className="svg">
                        <img src={examssvg} />
                    </div>
                </div>
                <div className="rightofcard">
                    <h3>Or Choose New Sections</h3>
                    <div className="rightsectionthings">
                        <div className="bachayofthings">
                            <div className="fazoolclass">
                                <p>Section 01</p>
                                <h4>Bacteria and Fungi</h4>
                            </div>
                            <div className="examtime">
                                <p>Total Exam Time</p>
                                <h4>30 Min</h4>
                            </div>
                        </div>
                        <div className="bachayofthings">
                            <div className="fazoolclass">
                                <p>Section 01</p>
                                <h4>Bacteria and Fungi</h4>
                            </div>
                            <div className="examtime">
                                <p>Total Exam Time</p>
                                <h4>30 Min</h4>
                            </div>
                        </div>
                        <div className="bachayofthings">
                            <div className="fazoolclass">
                                <p>Section 01</p>
                                <h4>Bacteria and Fungi</h4>
                            </div>
                            <div className="examtime">
                                <p>Total Exam Time</p>
                                <h4>30 Min</h4>
                            </div>
                        </div>
                        <div className="bachayofthings">
                            <div className="fazoolclass">
                                <p>Section 01</p>
                                <h4>Bacteria and Fungi</h4>
                            </div>
                            <div className="examtime">
                                <p>Total Exam Time</p>
                                <h4>30 Min</h4>
                            </div>
                        </div>
                        <button className="nextbutton">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card