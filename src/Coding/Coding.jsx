import React from 'react';
import Banner from './Banner'
import {Grid} from '@material-ui/core'
import CourseCard from '../reusableComponent/CourseCard/CourseCard';
import Java from './../Images/SubjectImage/java.jpg'
import Python from './../Images/SubjectImage/python (2).png'
import DSA from './../Images/SubjectImage/DSA (2).jpg'
function Coding(props) {
    return (
        <div>
            <Banner />
             <Grid container  direction="row" alignItems="center" justifyContent="center">
             <CourseCard image={Java} heading='Java' text='JAVA was developed by James Gosling at Sun Microsystems Inc in the year 1991, later acquired by Oracle Corporation. It is a simple programming language. Java makes writing, compiling, and debugging programming easy. It helps to create reusable code and modular programs.'/>
             <CourseCard image={Python} heading='Python' text='Python is a widely used general-purpose, high level programming language. It was designed with an emphasis on code readability, and its syntax allows programmers to express their concepts in fewer lines of code.'/>
             <CourseCard image={DSA} heading='Data Structure and Algorithm' text='An Algorithm is just a method of doing something on a computer, while a Data Structure is a layout for memory that represents some sort of data.'/>
            </Grid> 
        </div>
    );
}
export default Coding;