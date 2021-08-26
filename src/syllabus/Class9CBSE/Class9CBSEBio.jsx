import React from 'react';
import CourseOutlined from './../../reusableComponent/courseOutline/CourseOutlined'
import Biology from './../../Images/SubjectImage/biology.png'

function Class9CBSEBio(props) {
    const bio = [{chapter:'Chapter: The Fundamental Unit of Life', topics: ['Introduction to Cell', 'Structural Organisation of a Cell', 'Plasma Membrane', 'Cell Wall', 'Nucleus', 'Cytoplasm', 'Endoplasmic Reticulum', 'Golgi Apparatus',  'Lysosomes', 'Mitochondria',  'Plastids', 'Vacuoles', 'Cell Division']},
    {chapter:'Chapter: Tissues', topics: ['Introduction to Tissues', ' Plant Tissues', 'Meristematic  Tissue', 'Permanent Tissue', 'Animal Tissues', 'Epithelial Tissue', 'Connective Tissue', 'Muscular Tissue',  ' Nervous Tissue']},
    {chapter:'Chapter:  Diversity in Living Organisms', topics: [' Diversity in Living Organisms', 'Classification and Evaluation', "Whittaker's Five Kingdom Classification", 'Monera', 'Protista', 'Fungi', 'Plantae', 'Animalia']},
    {chapter:'Chapter:  Why do we fall ill', topics: ['Health', "Disease and it's type", "Causes of disease", "Antibiotics", "Principle of Treatment","Principles of Prevention"]},
    {chapter:'Chapter:  Natural resources', topics: ['Biogeochemical Cycle','Global Warming', 'Soil','The Breath of Life-Air', 'Water: A Wonder Liquid']},
    {chapter:'Chapter:  Improvement in food resources', topics: ['Cattle Farming','Crop Production Management', 'Crop Protection Management',' Fishery and Apiculture', 'Improvement in Crop Yields', 'Polutry Farming']}]
    return (
        <>
        <CourseOutlined image={Biology} heading='Biology class9' subheading='CBSE study material with 10 year paper' syllabus={bio}/>
    </>
    );
}

export default Class9CBSEBio;
