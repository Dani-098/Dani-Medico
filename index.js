<script>
    const mdcatExams = ["MDCAT", "BSN", "NUMS", "AKU", "AFNS"];
    const examSubjects = {
        "all": ["All Subjects"],
        "MDCAT": ["Biology", "Chemistry", "Physics", "English", "Logical Reasoning"],
        "BSN": ["Biology", "Chemistry", "Physics", "English", "Logical Reasoning"],
        "NUMS": ["Biology", "Chemistry", "Physics", "English", "Logical Reasoning"],
        "AKU": ["Biology", "Chemistry", "Physics", "English", "Logical Reasoning"],
        "AFNS": ["Biology", "Chemistry", "Physics", "English", "Logical Reasoning"]
    };

    const examSubjectChapters = {
        "MDCAT_Biology": ["1. ACELLULAR LIFE", "2. BIOENERGETICS", "3. BIOLOGICAL MOLECULES", "4. CELL STRUCTURE & FUNCTION", "5. COORDINATION & CONTROL", "6. ENZYMES", "7. EVOLUTION", "8. REPRODUCTION", "9. SUPPORT & MOVEMENT", "10. INHERITENCE", "11. CIRCULATION", "12. IMMUNITY", "13. RESPIRATION", "14. DIGESTION", "15. HOMEOSTASIS", "16. BIOTECHNOLOGY"],
        "MDCAT_Chemistry": ["1. INTRO TO FUNDAMENTAL CONCEPTS OF CHEMISTRY", "2. ATOMIC STRUCTURE", "3. GASES", "4. LIQUIDS", "5. SOLIDS", "6. CHEMICAL EQUILIBRIUM", "7. REACTION KINETICS", "8. THERMO-CHEMISTRY & ENERGETICS OF CHEMICAL REACTIONS", "9. ELECTROCHEMISTRY", "10. CHEMICAL BONDING", "11.S & P Block Elements", "12.TRANSITION ELEMENTS", "13.FUNDAMENTAL PRINCIPLES OF ORGANIC CHEMISTRY", "14.CHEMISTRY OF HYDROCARBONS", "15.ALKYL HALIDES", "16.ALCOHOLS & PHENOLS", "17.ALDEHYDES & KETONES", "18. CARBOXYLIC ACIDS", "19. MACROMOLECULES"],
        "MDCAT_Physics": ["1.VECTORS & EQUILIBRIUM", "2.FORCE & MOTION", "3.WORK & ENERGY", "4.ROTATIONAL & CIRCULAR MOTION", "5.FLUID DYNAMICS", "6.WAVES", "7.THERMODYNAMICS", "8.ELECTROSTATICS", "9.CURRENT ELECTRICITY", "10.ELECTROMAGNETISM", "11.ELECTROMAGNETIC INDUCTION", "12.ALTERNATING CURRENT", "13.ELECTRONICS", "14.DAWN OF MODERN PHYSICS", "15.ATOMIC SPECTRA", "16.NUCLEAR PHYSICS"],
        "MDCAT_English": ["1. GRAMMAR FUNDAMENTALS", "2. VOCABULARY BUILDING", "3. READING COMPREHENSION"],
        "MDCAT_Logical_Reasoning": ["1. ANALYTICAL REASONING", "2. LOGICAL DEDUCTION", "3. PATTERN RECOGNITION", "4. VERBAL REASONING", "5. NON-VERBAL REASONING", "6. CRITICAL THINKING"],
        "BSN_Biology": ["1. HUMAN ANATOMY", "2. HUMAN PHYSIOLOGY", "3. BIOCHEMISTRY", "4. MICROBIOLOGY", "5. PATHOLOGY", "6. PHARMACOLOGY", "7. NUTRITION", "8. GENETICS", "9. IMMUNOLOGY", "10. FIRST AID", "11. NURSING FUNDAMENTALS", "12. COMMUNITY HEALTH"],
        "BSN_Chemistry": ["1. BASIC CHEMISTRY", "2. ORGANIC CHEMISTRY", "3. BIOCHEMISTRY", "4. MEDICINAL CHEMISTRY", "5. ANALYTICAL CHEMISTRY", "6. ENVIRONMENTAL CHEMISTRY"],
        "BSN_Physics": ["1. BIOPHYSICS", "2. MEDICAL PHYSICS", "3. RADIATION PHYSICS", "4. THERMODYNAMICS", "5. FLUID MECHANICS", "6. ELECTRICITY IN MEDICINE"],
        "BSN_English": ["1. MEDICAL TERMINOLOGY", "2. COMMUNICATION SKILLS"],
        "BSN_Logical_Reasoning": ["1. PROBLEM SOLVING", "2. DECISION MAKING", "3. CLINICAL REASONING", "4. ETHICAL REASONING"],
        "NUMS_Biology": ["1. CELL STRUCTURE", "2. GENETICS", "3. HUMAN PHYSIOLOGY", "4. PLANT PHYSIOLOGY", "5. ECOLOGY", "6. EVOLUTION", "7. MICROBIOLOGY", "8. BIOTECHNOLOGY"],
        "NUMS_Chemistry": ["1. PHYSICAL CHEMISTRY", "2. INORGANIC CHEMISTRY", "3. ORGANIC CHEMISTRY", "4. ENVIRONMENTAL CHEMISTRY", "5. ANALYTICAL CHEMISTRY"],
        "NUMS_Physics": ["1. MECHANICS", "2. THERMODYNAMICS", "3. ELECTROMAGNETISM", "4. OPTICS", "5. MODERN PHYSICS", "6. MEDICAL PHYSICS"],
        "NUMS_English": ["1. ENGLISH PROFICIENCY", "2. COMPREHENSION", "3. WRITING SKILLS"],
        "NUMS_Logical_Reasoning": ["1. QUANTITATIVE REASONING", "2. VERBAL REASONING", "3. ABSTRACT REASONING"],
        "AKU_Biology": ["1-INTRODUCTION OF BIOLOGY","2-BIOLOGICAL MOLECULES","3-ENZYMES","4-THE CELL","5-CLASSIFICATION AND ACELLULAR LIFE","6-KINGDOM PROKARYOTAE","7-KINGDOM PROTISTA (PROTOCTISTA)","8-KINGDOM FUNGI","9-KINGDOM PLANTAE","10-KINGDOM ANIMALIA","11-BIOENERGETICS","12-NUTRITION","13-GASEOUS EXCHANGE","14-TRANSPORT","15-HOMEOSTASIS","16-SUPPORT AND MOVEMENT","17-COORDINATION AND CONTROL","18-REPRODUCTION","19-GROWTH AND DEVELOPMENT","20-CHROMOSOMES AND DNA","21-CELL CYCLE","22-VARIATION AND GENETICS","23-BIOTECHNOLOGY","24-EVOLUTION","25-ECOSYSTEM","26-SOME MAJOR ECOSYSTEMS","27-MAN AND HIS ENVIRONMENT"],
        "AKU_Chemistry": ["1- STOICHIOMETRY","2- ATOMIC STRUCTURE","3- THEORIES OF COVALENT BONDING AND SHAPE OF MOLECULES","4- STATES OF MATTER I: GASES","5- STATES OF MATTER II: LIQUIDS","6- STATES OF MATTER III: SOLIDS","7- CHEMICAL EQUILIBRIUM","8- ACIDS, BASES AND SALTS","9- CHEMICAL KINETICS","10- SOLUTIONS AND COLLOIDS","11- THERMOCHEMISTRY","12- ELECTROCHEMISTRY","13- S- AND P-BLOCK ELEMENTS","14- D- AND F-BLOCK ELEMENTS","15- ORGANIC COMPOUNDS","16- HYDROCARBONS","17- ALKYL HALIDES AND AMINES","18- ALCOHOLS, PHENOLS AND ETHERS","19- CARBONYL COMPOUND I: ALDEHYDES AND KETONES","20- CARBONYL COMPOUND II: CARBOXYLIC ACIDS AND FUNCTIONAL DERIVATIVES","21- BIOCHEMISTRY","22- INDUSTRIAL CHEMISTRY","23- ENVIRONMENTAL CHEMISTRY","24- ANALYTICAL CHEMISTRY"],
        "AKU_Physics": ["1- STOICHIOMETRY","2- ATOMIC STRUCTURE","3- THEORIES OF COVALENT BONDING AND SHAPE OF MOLECULES","4- STATES OF MATTER I: GASES","5- STATES OF MATTER II: LIQUIDS","6- STATES OF MATTER III: SOLIDS","7- CHEMICAL EQUILIBRIUM","8- ACIDS, BASES AND SALTS","9- CHEMICAL KINETICS","10- SOLUTIONS AND COLLOIDS","11- THERMOCHEMISTRY","12- ELECTROCHEMISTRY","13- S- AND P-BLOCK ELEMENTS","14- D- AND F-BLOCK ELEMENTS","15- ORGANIC COMPOUNDS","16- HYDROCARBONS","17- ALKYL HALIDES AND AMINES","18- ALCOHOLS, PHENOLS AND ETHERS","19- CARBONYL COMPOUND I: ALDEHYDES AND KETONES","20- CARBONYL COMPOUND II: CARBOXYLIC ACIDS AND FUNCTIONAL DERIVATIVES","21- BIOCHEMISTRY","22- INDUSTRIAL CHEMISTRY","23- ENVIRONMENTAL CHEMISTRY","24- ANALYTICAL CHEMISTRY"],
        "AKU_English": ["1. ACADEMIC ENGLISH", "2. MEDICAL COMMUNICATION", "3. RESEARCH WRITING"],
        "AKU_Logical_Reasoning": ["1. CRITICAL ANALYSIS", "2. PROBLEM SOLVING", "3. DECISION MAKING"],
        "AFNS_Biology": ["1. BASIC BIOLOGY", "2. HUMAN ANATOMY", "3. PHYSIOLOGY", "4. MICROBIOLOGY", "5. FIRST AID"],
        "AFNS_Chemistry": ["1. BASIC CHEMISTRY", "2. BIOCHEMISTRY", "3. PHARMACOLOGY"],
        "AFNS_Physics": ["1. BASIC PHYSICS", "2. MEDICAL PHYSICS"],
        "AFNS_English": ["1. MILITARY ENGLISH", "2. COMMUNICATION SKILLS"],
        "AFNS_Logical_Reasoning": ["1. ANALYTICAL THINKING", "2. DECISION MAKING"]
    };
    
    const testsData = [
  { 
    id: 'T1', 
    title: 'BIOLOGY MDCAT', 
    subject: 'Biology', 
    chapter: '1. ACELLULAR LIFE', 
    exam: 'MDCAT', 
    province: 'All Provinces', 
    mcqs: [
        { q: "What did Dmitri Ivanovsky's filtration experiments with Tobacco Mosaic Disease sap demonstrate?", options: ["Bacteria cause the disease.", "The infectious agent could pass through filters that retain bacteria.", "Viruses contain DNA.", "The infectious agent could be crystallized."], answer: 1 },
        { q: "The term 'virus' originates from a Latin word meaning:", options: ["Small particle", "Poison", "Filterable agent", "Living fluid"], answer: 1 },
        { q: "Which of the following is NOT a characteristic used to argue that viruses are non-living?", options: ["Ability to replicate only inside host cells", "Lack of metabolic machinery", "Possession of genetic material", "Ability to be crystallized."], answer: 2 },
        { q: "Which scientist first crystallized a virus (TMV), demonstrating it could behave like a chemical?", options: ["Charles Chamberland", "Martinus Beijerinck", "Wendell Stanley", "Louis Pasteur"], answer: 2 },
        { q: "Viruses are considered obligate intracellular parasites because they:", options: ["Can survive outside host cells indefinitely", "Lack ribosomes and energy-generating systems", "Always kill their host cells", "Have DNA genomes"], answer: 1 },
        { q: "Which of the following is a unique property of viral genomes compared to cellular organisms?", options: ["They can be single-stranded DNA", "They can be double-stranded RNA", "They can be segmented", "All of the above"], answer: 3 },
        { q: "The primary reason viruses are not classified in the traditional biological taxonomy (e.g., Kingdom, Phylum) is:", options: ["They are too small", "They lack cellular structure", "They do not evolve", "They are considered chemicals"], answer: 1 },
        { q: "Which statement about viral host range is correct?", options: ["All viruses can infect any type of cell", "Host range is determined by the presence of specific host receptors", "Plant viruses commonly infect humans", "Bacteriophages can infect animal cells"], answer: 1 },
        { q: "The 'virocell' concept refers to:", options: ["A virus particle outside a host", "A host cell that has been converted into a virus-producing factory", "A type of viroid", "A giant virus with cellular genes"], answer: 1 },
        { q: "Which of the following is evidence supporting the origin of viruses from cellular organisms?", options: ["Presence of reverse transcriptase", "Genetic similarity between viral and host genes", "Ability to form crystals", "Lack of envelopes"], answer: 1 },
        { q: "The primary function of the viral capsid is to:", options: ["Carry out metabolic reactions", "Protect the viral genome", "Attach to host cells", "Synthesize viral proteins"], answer: 1 },
        { q: "Which symmetry is found in the capsid of Adenovirus?", options: ["Helical", "Icosahedral", "Complex", "Amorphous"], answer: 1 },
        { q: "Viral envelopes are typically acquired from:", options: ["The environment", "Host cell membranes during budding", "Self-synthesized lipids", "Other viruses"], answer: 1 },
        { q: "Glycoprotein spikes on enveloped viruses are crucial for:", options: ["Genome replication", "Host cell recognition and attachment", "Capsid assembly", "Energy production"], answer: 1 },
        { q: "The nucleocapsid refers to:", options: ["The viral envelope", "The capsid + viral genome", "Viral RNA only", "Host cell nucleus infected by virus"], answer: 1 },
        { q: "Which component is present in ALL viruses?", options: ["Lipid envelope", "DNA genome", "Protein capsid", "Glycoprotein spikes"], answer: 2 },
        { q: "Non-enveloped viruses are generally more resistant to:", options: ["Freezing", "Detergents and solvents", "UV light", "All of the above"], answer: 1 },
        { q: "The triangulation number (T-number) in icosahedral viruses determines:", options: ["Genome size", "Number of capsomeres", "Type of nucleic acid", "Host range"], answer: 1 },
        { q: "Which of the following viruses has a helical capsid?", options: ["Adenovirus", "Tobacco Mosaic Virus", "HIV", "Herpesvirus"], answer: 1 },
        { q: "Viral tegument is a feature of:", options: ["Bacteriophages", "Herpesviruses", "Picornaviruses", "Retroviruses"], answer: 1 },
        { q: "The Baltimore classification system categorizes viruses based on:", options: ["Host range", "Capsid symmetry", "Genome type and replication strategy", "Disease severity"], answer: 2 },
        { q: "Which Baltimore group includes retroviruses like HIV?", options: ["Group IV", "Group V", "Group VI", "Group VII"], answer: 2 },
        { q: "A positive-sense single-stranded RNA virus genome can directly function as:", options: ["Template for DNA synthesis", "mRNA for protein translation", "Substrate for reverse transcriptase", "Integrase target"], answer: 1 },
        { q: "Which virus has a partially double-stranded DNA genome with an RNA intermediate?", options: ["Hepatitis A virus", "Hepatitis B virus", "Hepatitis C virus", "HIV"], answer: 1 },
        { q: "Segmented genomes are characteristic of:", options: ["HIV", "Influenza virus", "Hepatitis B virus", "Adenovirus"], answer: 1 },
        { q: "Which enzyme is carried within the virion of negative-sense RNA viruses?", options: ["DNA polymerase", "Reverse transcriptase", "RNA-dependent RNA polymerase", "Integrase"], answer: 2 },
        { q: "Viroids differ from viruses in that viroids:", options: ["Have a protein coat", "Infect animals", "Consist only of circular RNA", "Have a DNA genome"], answer: 2 },
        { q: "Prions are unique because they lack:", options: ["Protein", "Nucleic acid", "Infectivity", "Ability to cause disease"], answer: 1 },
        { q: "Satellite viruses require a helper virus for:", options: ["Replication", "Capsid formation", "Host attachment", "All of the above"], answer: 3 },
        { q: "Which is a DNA virus?", options: ["Influenza virus", "HIV", "Herpes simplex virus", "Dengue virus"], answer: 2 },
        { q: "The first step in the viral replication cycle is:", options: ["Penetration", "Attachment", "Uncoating", "Replication"], answer: 1 },
        { q: "In bacteriophage T4, the tail fibers are involved in:", options: ["DNA injection", "Host cell recognition", "Capsid assembly", "Genome replication"], answer: 1 },
        { q: "The 'eclipse phase' in viral replication refers to the period when:", options: ["Virions are assembling", "No infectious virions are detectable inside the host cell", "Host cell lysis occurs", "Viral DNA integrates into host genome"], answer: 1 },
        { q: "Lysogenic conversion occurs when:", options: ["The host cell is immediately lysed", "Viral DNA integrates into the host genome", "The virus exists as a prophage", "Both B and C"], answer: 3 },
        { q: "Reverse transcriptase is an enzyme that synthesizes:", options: ["RNA from DNA", "DNA from RNA", "Protein from RNA", "RNA from protein"], answer: 1 },
        { q: "HIV protease is essential for:", options: ["Viral entry", "Cleaving viral polyproteins into functional units", "Reverse transcription", "Integration"], answer: 1 },
        { q: "The enzyme integrase in HIV is responsible for:", options: ["Viral budding", "Inserting viral DNA into host chromosome", "Cleaving viral proteins", "Converting RNA to DNA"], answer: 1 },
        { q: "Which cycle results in immediate host cell lysis?", options: ["Lysogenic cycle", "Lytic cycle", "Latent cycle", "Chronic cycle"], answer: 1 },
        { q: "In the lytic cycle of bacteriophage, the stage where viral components are assembled into new virions is called:", options: ["Penetration", "Biosynthesis", "Maturation", "Release"], answer: 2 },
        { q: "Viral budding typically occurs in:", options: ["Naked viruses", "Enveloped viruses", "Bacteriophages", "Viroids"], answer: 1 },
        { q: "Interferons are host proteins that:", options: ["Directly destroy viruses", "Signal neighboring cells to activate antiviral defenses", "Act as antibodies", "Lyse infected cells"], answer: 1 },
        { q: "Which virus is known to destroy helper T-cells, leading to immunodeficiency?", options: ["Influenza virus", "HIV", "Hepatitis B virus", "Rhinovirus"], answer: 1 },
        { q: "Kaposi's sarcoma in AIDS patients is caused by:", options: ["HIV directly", "Human herpesvirus-8 (HHV-8)", "Cytomegalovirus", "Epstein-Barr virus"], answer: 1 },
        { q: "A cytokine storm is a severe immune reaction often associated with which virus?", options: ["HIV", "Avian influenza virus", "Rhinovirus", "Hepatitis A virus"], answer: 1 },
        { q: "Prion diseases affect which organ system primarily?", options: ["Respiratory system", "Nervous system", "Digestive system", "Circulatory system"], answer: 1 },
        { q: "Viral syncytia formation is a mechanism used by which virus to spread directly between cells?", options: ["Poliovirus", "HIV", "Hepatitis B virus", "Adenovirus"], answer: 1 },
        { q: "Which hepatitis virus is transmitted via the fecal-oral route?", options: ["Hepatitis B", "Hepatitis C", "Hepatitis A", "Hepatitis D"], answer: 2 },
        { q: "The 'window period' in HIV infection refers to the time when:", options: ["The virus is dormant", "Antibodies are not yet detectable", "Symptoms are most severe", "The virus cannot be transmitted"], answer: 1 },
        { q: "Cotton Leaf Curl Virus in Pakistan is transmitted by:", options: ["Mosquitoes", "Whiteflies", "Aphids", "Beetles"], answer: 1 },
        { q: "Which viral disease is characterized by Koplik's spots in the mouth?", options: ["Dengue", "Measles", "Chickenpox", "Rubella"], answer: 1 },
        { q: "Arboviruses are transmitted by:", options: ["Rodents", "Arthropods (e.g., mosquitoes, ticks)", "Contaminated water", "Airborne droplets"], answer: 1 },
        { q: "Ebola virus is primarily transmitted through:", options: ["Airborne droplets", "Direct contact with infected body fluids", "Contaminated food", "Mosquito bites"], answer: 1 },
        { q: "The basic reproduction number (R0) indicates:", options: ["Mortality rate", "Transmission potential", "Incubation period", "Genome size"], answer: 1 },
        { q: "Which hepatitis virus requires co-infection with Hepatitis B virus?", options: ["HAV", "HCV", "HDV", "HEV"], answer: 2 },
        { q: "A pandemic is defined as:", options: ["A disease outbreak in a small community", "A disease spread across a country", "A disease spread across multiple continents", "A disease that affects only animals"], answer: 2 },
        { q: "Which virus has bats as its natural reservoir?", options: ["Influenza virus", "Ebola virus", "Hepatitis C virus", "Rhinovirus"], answer: 1 },
        { q: "Antigenic shift in influenza viruses is a result of:", options: ["Point mutations", "Genome reassortment between different strains", "Reverse transcription", "Integration into host genome"], answer: 1 },
        { q: "The primary vector for Dengue virus is:", options: ["Anopheles mosquito", "Aedes mosquito", "Sandfly", "Tick"], answer: 1 },
        { q: "Vertical transmission refers to:", options: ["Transmission between individuals of the same generation", "Transmission from parent to offspring", "Transmission via vectors", "Airborne transmission"], answer: 1 },
        { q: "Herd immunity occurs when:", options: ["A large percentage of the population is vaccinated or immune", "The virus mutates to a weaker form", "All infected individuals are isolated", "Animals are vaccinated"], answer: 0 },
        { q: "Plaque assays are used to measure:", options: ["Antibody levels", "Viral infectivity (PFU/mL)", "Genome size", "Capsid symmetry"], answer: 1 },
        { q: "The Western blot test is used to:", options: ["Detect viral RNA", "Confirm HIV infection by detecting specific antibodies/antigens", "Measure CD4 count", "Culture viruses"], answer: 1 },
        { q: "Electron microscopy is particularly useful for:", options: ["Diagnosing common colds", "Visualizing novel or unculturable viruses", "Measuring viral load", "Detecting antibodies"], answer: 1 },
        { q: "PCR (Polymerase Chain Reaction) is used to:", options: ["Detect viral proteins", "Amplify and detect viral nucleic acids", "Measure antibody titers", "Culture viruses"], answer: 1 },
        { q: "Hemagglutination inhibition assays detect:", options: ["Viral DNA", "Neutralizing antibodies", "Capsid proteins", "Reverse transcriptase activity"], answer: 1 },
        { q: "The 'window period' in HIV testing can be reduced by using:", options: ["ELISA alone", "PCR for viral RNA", "Western blot", "CD4 count"], answer: 1 },
        { q: "Viral load testing measures:", options: ["Antibody levels", "Number of viral genome copies per mL", "CD4+ T-cell count", "Capsid protein concentration"], answer: 1 },
        { q: "Which diagnostic method is considered gold standard for confirming HIV?", options: ["Rapid test", "ELISA", "Western blot", "Viral culture"], answer: 2 },
        { q: "Inclusion bodies in rabies-infected neurons are called:", options: ["Negri bodies", "Guarnieri bodies", "Lewy bodies", "Pappataci bodies"], answer: 0 },
        { q: "Quantitative PCR (qPCR) is superior for:", options: ["Determining viral morphology", "Measuring exact viral genome copies", "Detecting antibodies", "Culturing viruses"], answer: 1 },
        { q: "AZT (Zidovudine) is an antiretroviral that inhibits:", options: ["HIV protease", "Reverse transcriptase", "Integrase", "Viral entry"], answer: 1 },
        { q: "Neuraminidase inhibitors (e.g., Oseltamivir) are used to treat:", options: ["HIV", "Influenza", "Hepatitis C", "Herpes"], answer: 1 },
        { q: "Protease inhibitors in HIV therapy prevent:", options: ["Viral entry", "Cleavage of viral polyproteins", "Reverse transcription", "Integration"], answer: 1 },
        { q: "Live attenuated vaccines contain:", options: ["Killed pathogens", "Weakened but living pathogens", "Toxoid proteins", "DNA fragments"], answer: 1 },
        { q: "Virus-like particle (VLP) vaccines contain:", options: ["Live virus", "Empty viral capsids without genetic material", "Inactivated virus", "Viral DNA"], answer: 1 },
        { q: "The Oral Polio Vaccine (OPV) contains:", options: ["Killed virus", "Attenuated virus", "Viral DNA", "Capsid proteins only"], answer: 1 },
        { q: "mRNA vaccines (e.g., COVID-19 vaccines) work by:", options: ["Introducing live virus into the body", "Delivering mRNA that encodes viral protein, prompting immune response", "Injecting killed virus", "Providing ready-made antibodies"], answer: 1 },
        { q: "Broad-spectrum antivirals often target:", options: ["Viral capsids", "Host factors essential for viral replication", "Viral envelopes", "Antibody production"], answer: 1 },
        { q: "Phage therapy uses bacteriophages to treat:", options: ["Viral infections", "Bacterial infections", "Fungal infections", "Prion diseases"], answer: 1 },
        { q: "CRISPR-Cas technology is being explored to target:", options: ["Only bacterial infections", "Specific viral genomes", "Host DNA exclusively", "Prion proteins"], answer: 1 },
        { q: "Giant viruses (e.g., Mimivirus) challenge traditional definitions because they:", options: ["Lack DNA", "Encode cellular metabolic genes", "Cannot be seen under light microscopy", "Infect only plants"], answer: 1 },
        { q: "Metagenomics has revolutionized virology by enabling detection of:", options: ["Only known viruses", "Unculturable and novel viruses in environmental samples", "Prions only", "Bacterial pathogens"], answer: 1 },
        { q: "The 'One Health' approach emphasizes the interconnection between:", options: ["Viruses and bacteria only", "Human, animal, and environmental health", "Plants and viruses only", "Vaccines and antivirals"], answer: 1 },
        { q: "Zoonotic spillover refers to:", options: ["Transmission between humans only", "Transmission from animals to humans", "Transmission via vectors only", "Laboratory accidents"], answer: 1 },
        { q: "Viroporins are viral proteins that:", options: ["Form ion channels in host membranes", "Replicate viral genome", "Assemble capsids", "Act as RNA polymerase"], answer: 0 },
        { q: "Defective interfering particles are viral mutants that:", options: ["Enhance viral replication", "Compete with wild-type virus for replication machinery", "Cause immediate lysis", "Act as vaccines"], answer: 1 },
        { q: "The 'quasispecies' concept in virology refers to:", options: ["A single viral strain", "A population of genetically diverse viral variants", "Different virus species in one host", "Viruses that infect multiple hosts"], answer: 1 },
        { q: "Endogenous retroviruses are:", options: ["Always active and causing disease", "Viral sequences integrated into host genome and inherited", "Found only in bacteria", "A type of viroid"], answer: 1 },
        { q: "The Red Queen hypothesis in viral evolution describes:", options: ["Host-parasite coevolutionary arms race", "Viral genome stability", "Vaccine failure", "Viral latency"], answer: 0 },
        { q: "Viral dark matter refers to:", options: ["Well-characterized viruses", "Uncharacterized viral sequences in metagenomic data", "Prions", "Inactive viral particles"], answer: 1 },
        { q: "Oncolytic viruses are engineered to:", options: ["Cause cancer", "Target and kill cancer cells", "Treat bacterial infections", "Act as vaccines"], answer: 1 },
        { q: "CRISPR-Cas systems naturally function in bacteria as:", options: ["Metabolic pathways", "Defense against bacteriophages", "DNA replication machinery", "Protein synthesis systems"], answer: 1 },
        { q: "Phage display technology is used to:", options: ["Treat viral infections", "Evolve and select novel proteins/antibodies", "Sequence viral genomes", "Culture viruses"], answer: 1 },
        { q: "Synthetic virology involves:", options: ["Studying only natural viruses", "Engineering viral genomes for research/therapeutics", "Destroying all viruses", "Creating new viral diseases"], answer: 1 },
        { q: "Organoid models are used in virology to:", options: ["Replace animal models entirely", "Mimic human tissue architecture for infection studies", "Mass-produce viruses", "Develop new vaccines directly"], answer: 1 },
        { q: "Nanopore sequencing allows:", options: ["Only DNA sequencing", "Real-time, long-read sequencing of viral genomes", "Protein structure determination", "Viral culture"], answer: 1 },
        { q: "The 'virosphere' refers to:", options: ["A single virus particle", "The global ecological community of viruses", "Viral capsid structure", "A type of viroid"], answer: 1 },
        { q: "Personalized virology considers:", options: ["Only viral genetics", "Host genetic factors in infection and treatment", "Universal vaccines only", "One-size-fits-all antivirals"], answer: 1 },
        { q: "AI (Artificial Intelligence) is being used in virology to:", options: ["Predict viral-host interactions and protein structures", "Replace all lab work", "Create synthetic viruses only", "Diagnose without tests"], answer: 0 },
        { q: "The future of virology includes understanding:", options: ["Virus-host ecosystems and global viral ecology", "Only viral structure", "How to eliminate all viruses", "Plant viruses exclusively"], answer: 0 }
    ]
}
  ];


    let activeTestMCQs = [];
    let userSelections = [];
    let currentOpenTest = null;
    let timerInterval = null;
    let totalSeconds = 0;
    let selectedPct = 1.0;
    let pendingTestId = null;

    const provinceSelect = document.getElementById('filter-province');
    const examSelect = document.getElementById('filter-exam');
    const subjectSelect = document.getElementById('filter-subject');
    const chapterSelect = document.getElementById('filter-chapter');

    function initializeFilters() { updateExams(); }

    function updateExams() {
        examSelect.innerHTML = '<option value="all">All Exams</option>';
        mdcatExams.forEach(exam => {
            const option = document.createElement('option');
            option.value = exam; option.textContent = exam; examSelect.appendChild(option);
        });
        updateSubjects();
    }

    function updateSubjects() {
        const exam = examSelect.value;
        subjectSelect.innerHTML = '<option value="all">All Subjects</option>';
        if (exam !== 'all') {
            subjectSelect.disabled = false;
            (examSubjects[exam] || []).forEach(subject => {
                if (subject !== "All Subjects") {
                    const option = document.createElement('option');
                    option.value = subject; option.textContent = subject; subjectSelect.appendChild(option);
                }
            });
        } else {
            subjectSelect.disabled = true; chapterSelect.disabled = true;
        }
        updateChapters();
    }

    function updateChapters() {
        const exam = examSelect.value;
        const subject = subjectSelect.value;
        chapterSelect.innerHTML = '<option value="all">All Chapters</option>';
        if (subject !== 'all' && exam !== 'all') {
            chapterSelect.disabled = false;
            const key = `${exam}_${subject.replace(/\s+/g, '_')}`;
            (examSubjectChapters[key] || []).forEach(chapter => {
                const option = document.createElement('option');
                option.value = chapter; option.textContent = chapter; chapterSelect.appendChild(option);
            });
        } else {
            chapterSelect.disabled = true;
        }
        loadTests();
    }

    function loadTests() {
        const container = document.getElementById('tests-container');
        const provVal = provinceSelect.value;
        const examVal = examSelect.value;
        const subVal = subjectSelect.value;
        const chapVal = chapterSelect.value;

        const filtered = testsData.filter(t => 
            (provVal === 'all' || t.province === provVal) &&
            (examVal === 'all' || t.exam === examVal) &&
            (subVal === 'all' || t.subject === subVal) &&
            (chapVal === 'all' || t.chapter === chapVal)
        );

        if (filtered.length === 0) {
            container.innerHTML = '';
            document.getElementById('no-content-message').classList.remove('hidden');
        } else {
            document.getElementById('no-content-message').classList.add('hidden');
            container.innerHTML = filtered.map(test => `
                <div class="card test-card">
                    <div>
                        <h4>${test.title}</h4>
                        <p style="font-size:0.85rem; color:var(--color-primary-blue); font-weight:600;">${test.subject} | ${test.chapter}</p>
                    </div>
                    <button class="button primary-button" onclick="openConfigModal('${test.id}')">
                        <i class="fas fa-play"></i> Start Test
                    </button>
                </div>
            `).join('');
        }
    }

    /* Addition: Registration Flow */
    function openConfigModal(id) {
        pendingTestId = id;
        document.getElementById('configModal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function setPercentage(val, btn) {
        selectedPct = val;
        document.querySelectorAll('.pct-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }

    function handleDetailsSubmit(e) {
        e.preventDefault();
        const stdDetails = {
            name: document.getElementById('user-name').value,
            city: document.getElementById('user-city').value,
            whatsapp: document.getElementById('user-whatsapp').value,
            testId: pendingTestId,
            mode: selectedPct * 100 + "%"
        };
        
        // Replace with your Google Apps Script URL
        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx5PYcNHuM3vJIqRSK2SpqeK986JgD30a0oUbc9KopT8rlv_8rJCQRtp8K4xwKWBCZogA/exec";
        fetch(SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: JSON.stringify(stdDetails) });

        document.getElementById('configModal').style.display = 'none';
        openActualTest(pendingTestId);
    }

    function openActualTest(id) {
        const test = testsData.find(t => t.id === id);
        if(!test) return;

        // SLICING LOGIC
        const qty = Math.floor(test.mcqs.length * selectedPct);
        activeTestMCQs = [...test.mcqs].sort(() => 0.5 - Math.random()).slice(0, qty);
        
        currentOpenTest = test;
        userSelections = [];
        document.getElementById('test-modal-title').innerText = `${test.title} (${selectedPct*100}%)`;
        
        document.getElementById('mcq-questions').innerHTML = activeTestMCQs.map((m, i) => `
            <div class="mcq-question" id="q-block-${i}">
                <p style="font-weight: 600; margin-bottom: 10px;">Q${i+1}: ${m.q}</p>
                <div class="options-list">
                    ${m.options.map((opt, oi) => `
                        <div class="mcq-option">
                            <label id="label-${i}-${oi}">
                                <input type="radio" name="q${i}" value="${oi}" required>
                                <span>${opt}</span>
                            </label>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');

        document.getElementById('mcq-form').classList.remove('hidden');
        document.getElementById('result-summary').classList.add('hidden');
        document.getElementById('submit-btn').classList.remove('hidden');
        document.getElementById('review-actions').classList.add('hidden');
        document.getElementById('timer-container').classList.remove('hidden');
        document.getElementById('testModal').style.display = 'block';
        startTimer(activeTestMCQs.length * 40);
    }

    function startTimer(duration) {
        clearInterval(timerInterval);
        totalSeconds = duration;
        updateTimerDisplay();
        timerInterval = setInterval(() => {
            if (--totalSeconds < 0) { clearInterval(timerInterval); submitTest(); }
            else updateTimerDisplay();
        }, 1000);
    }

    function updateTimerDisplay() {
        const m = Math.floor(totalSeconds / 60), s = totalSeconds % 60;
        document.getElementById('time-left').textContent = `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
    }

    function submitTest(e) {
        if(e) e.preventDefault();
        clearInterval(timerInterval);
        document.getElementById('timer-container').classList.add('hidden');
        let correct = 0;
        userSelections = [];
        activeTestMCQs.forEach((m, i) => {
            const radios = document.getElementsByName(`q${i}`);
            let val = -1;
            radios.forEach(r => { if(r.checked) val = parseInt(r.value); });
            userSelections.push(val);
            if(val === m.answer) correct++;
        });

        document.getElementById('result-total').innerText = activeTestMCQs.length;
        document.getElementById('result-correct').innerText = correct;
        document.getElementById('result-percentage').innerText = ((correct/activeTestMCQs.length)*100).toFixed(0) + "%";
        document.getElementById('mcq-form').classList.add('hidden');
        document.getElementById('result-summary').classList.remove('hidden');
    }

    function checkTest() {
        document.getElementById('mcq-form').classList.remove('hidden');
        document.getElementById('result-summary').classList.add('hidden');
        document.getElementById('submit-btn').classList.add('hidden');
        document.getElementById('review-actions').classList.remove('hidden');
        activeTestMCQs.forEach((m, i) => {
            const sel = userSelections[i], cor = m.answer;
            const radios = document.getElementsByName(`q${i}`);
            radios.forEach(r => r.disabled = true);
            if(document.getElementById(`label-${i}-${cor}`)) document.getElementById(`label-${i}-${cor}`).classList.add('correct-ans');
            if(sel !== -1 && sel !== cor && document.getElementById(`label-${i}-${sel}`)) document.getElementById(`label-${i}-${sel}`).classList.add('wrong-ans');
        });
    }

    function backToResults() {
        document.getElementById('mcq-form').classList.add('hidden');
        document.getElementById('result-summary').classList.remove('hidden');
        document.getElementById('review-actions').classList.add('hidden');
    }

    function downloadTestPDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.text(currentOpenTest.title, 14, 20);
        doc.save(`${currentOpenTest.title}.pdf`);
    }

    function closeModal(id) {
        document.getElementById(id).style.display = 'none';
        document.body.style.overflow = 'auto';
        clearInterval(timerInterval);
    }

    function mobileMenuToggle() { document.getElementById('navLinks').classList.toggle('active'); }

    window.onclick = (e) => { if(e.target.className === 'modal') closeModal(e.target.id); };
    document.addEventListener('DOMContentLoaded', initializeFilters);
</script>
