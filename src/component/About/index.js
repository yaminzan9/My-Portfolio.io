import React from 'react';
import {AboutInfo , AboutTitle , Aboutsection , Anchor , InfoDesc , InfoDir , Span , Overlay , Div} from './style.js';


function About() {
    return (
        <Div id="Profile" >
        <Aboutsection>
            <Overlay>
            <div class="container">
                <AboutInfo>
                    <AboutTitle><Span>This is</Span> Me</AboutTitle> 
                    <InfoDir>Front-End Developer</InfoDir>
                    <InfoDesc>
                    I am a professional Front-End Developer and Software Engineer creating modern and responsive designs to Web in the best features.
                    
                    </InfoDesc>
                    <InfoDesc>
                        
                    </InfoDesc>
                </AboutInfo>
            </div>
            </Overlay>
        </Aboutsection>
        </Div>
    )
}

export default About;
