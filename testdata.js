const testsData = [
        {
  "id": "T1",
  "title": "BIOLOGY SINDH MDCAT",
  "subject": "Biology",
  "chapter": "5. COORDINATION & CONTROL",
  "exam": "MDCAT",
  "province": "Sindh",
  "mcqs": [
    {
      "q": "Which are steroid hormones?",
      "options": ["Cortisol", "Testosterone", "Insulin", "Thyroxine"],
      "answer": 0
    },
    {
      "q": "Which hormones use second messengers? I. Insulin II. Glucagon III. Thyroxine IV. Epinephrine",
      "options": ["I and III", "II and IV", "I and II", "III and IV"],
      "answer": 1
    },
    {
      "q": "Which gland-hormone pair is INCORRECT?",
      "options": ["Adrenal medulla - Aldosterone", "Pancreas - Glucagon", "Thyroid - Calcitonin", "Posterior pituitary - Oxytocin"],
      "answer": 0
    },
    {
      "q": "Match hormones with sources: 1. Melatonin 2. Erythropoietin 3. Gastrin 4. Calcitonin",
      "options": ["1 - B, 2 - A, 3 - C, 4 - D", "1 - A, 2 - B, 3 - D, 4 - C", "1 - D, 2 - C, 3 - B, 4 - A", "1 - C, 2 - D, 3 - A, 4 - B"],
      "answer": 0
    },
    {
      "q": "Which statement about hormones is INCORRECT?",
      "options": ["All cells respond to circulating hormones", "Hormones require specific receptors", "Steroid hormones alter gene activity", "Peptide hormones use second messengers"],
      "answer": 0
    },
    {
      "q": "Assertion: ADH reduces urine output. Reason: It increases water permeability in nephrons.",
      "options": ["Both true; Reason explains Assertion", "Both true; Reason irrelevant", "Assertion true; Reason false", "Both false"],
      "answer": 0
    },
    {
      "q": "Which are NOT secreted by anterior pituitary? I. ADH II. Oxytocin III. Prolactin IV. TSH",
      "options": ["I and II", "II and III", "III and IV", "I and IV"],
      "answer": 0
    },
    {
      "q": "Which are NOT functions of glucocorticoids?",
      "options": ["Increase blood glucose", "Promote sodium reabsorption", "Suppress immune response", "Stimulate glycogen synthesis"],
      "answer": 1
    },
    {
      "q": "Where is testosterone produced?",
      "options": ["Sertoli cells", "Leydig cells", "Beta cells", "Alpha cells"],
      "answer": 1
    },
    {
      "q": "According to Fig 18.1, which secretes IGF?",
      "options": ["Liver", "Pancreas", "Thymus", "Kidney"],
      "answer": 0
    },
    {
      "q": "______ prevents water loss by increasing nephron permeability.",
      "options": ["ADH", "Oxytocin", "TSH", "Prolactin"],
      "answer": 0
    },
    {
      "q": "How many parathyroid glands exist?",
      "options": ["2", "4", "6", "8"],
      "answer": 1
    },
    {
      "q": "What is glucagon’s primary function?",
      "options": ["Lower blood glucose", "Stimulate glycogen storage", "Increase blood glucose", "Inhibit glucose uptake"],
      "answer": 2
    },
    {
      "q": "All are anterior pituitary hormones EXCEPT:",
      "options": ["TSH", "ACTH", "ADH", "FSH"],
      "answer": 2
    },
    {
      "q": "Patient: Fatigue, weight gain, cold intolerance. Low T4, high TSH. Diagnosis?",
      "options": ["Hyperthyroidism", "Hypothyroidism", "Cushing’s syndrome", "Addison’s disease"],
      "answer": 1
    },
    {
      "q": "Which BEST describes lipophilic hormones?",
      "options": ["Bind membrane receptors", "Use second messengers", "Enter cells directly", "Include insulin"],
      "answer": 2
    },
    {
      "q": "Where is the pineal gland?",
      "options": ["Base of neck", "Above kidneys", "Between brain hemispheres", "Behind stomach"],
      "answer": 2
    },
    {
      "q": "What characterizes Type 1 diabetes?",
      "options": ["Insulin resistance", "Autoimmune β-cell destruction", "Obesity-related", "Managed by diet only"],
      "answer": 1
    },
    {
      "q": "Goiter is commonly caused by:",
      "options": ["Calcium deficiency", "Iodine deficiency", "Vitamin D excess", "Hyperthyroidism"],
      "answer": 1
    },
    {
      "q": "Which is ALWAYS secreted by adrenal medulla?",
      "options": ["Cortisol", "Aldosterone", "Epinephrine", "Testosterone"],
      "answer": 2
    },
    {
      "q": "Addison's disease involves lack of:",
      "options": ["Insulin", "Thyroxine", "Cortisol", "Growth hormone"],
      "answer": 2
    },
    {
      "q": "Erythropoietin is used for:",
      "options": ["Calcium regulation", "RBC production", "Blood pressure control", "Stress response"],
      "answer": 1
    },
    {
      "q": "Hormone classification into peptide/steroid is based on:",
      "options": ["Target organs", "Chemical nature", "Solubility", "Function"],
      "answer": 1
    },
    {
      "q": "Which feedback mechanism is RARE?",
      "options": ["Insulin negative feedback", "Oxytocin positive feedback", "Thyroxine negative feedback", "Cortisol negative feedback"],
      "answer": 1
    },
    {
      "q": "Which hormone is most suitable for immediate stress response?",
      "options": ["Cortisol", "Aldosterone", "Epinephrine", "Insulin"],
      "answer": 2
    },
    {
      "q": "What is common about insulin and glucagon?",
      "options": ["Both increase blood glucose", "Both secreted by alpha cells", "Both peptide hormones", "Both stored in posterior pituitary"],
      "answer": 2
    },
    {
      "q": "How do steroid hormones differ from peptide hormones?",
      "options": ["Steroid hormones use second messengers", "Peptide hormones bind intracellular receptors", "Steroid hormones are lipid-soluble", "Peptide hormones alter gene expression"],
      "answer": 2
    },
    {
      "q": "RAAS system is used for:",
      "options": ["Glucose regulation", "Blood pressure control", "Growth promotion", "Calcium absorption"],
      "answer": 1
    },
    {
      "q": "Correct gland-hormone pair:",
      "options": ["Thyroid - Aldosterone", "Adrenal cortex - Cortisol", "Pancreas - TSH", "Pituitary - Thyroxine"],
      "answer": 1
    },
    {
      "q": "Why is pituitary called \"master gland\"?",
      "options": ["Largest endocrine gland", "Controls other endocrine glands", "Produces most hormones", "Located in brain"],
      "answer": 1
    },
    {
      "q": "Advantage of second messenger system:",
      "options": ["Slow response", "Signal amplification", "Direct gene activation", "Long duration"],
      "answer": 1
    },
    {
      "q": "Disadvantage of steroid hormone action:",
      "options": ["Rapid response", "Slow onset", "Membrane binding", "Short duration"],
      "answer": 1
    },
    {
      "q": "Solution for iodine deficiency:",
      "options": ["Vitamin C supplements", "Iodized salt", "Calcium tablets", "Insulin injections"],
      "answer": 1
    },
    {
      "q": "Property of epinephrine:",
      "options": ["Decreases heart rate", "Constricts bronchioles", "Increases blood glucose", "Promotes digestion"],
      "answer": 2
    },
    {
      "q": "All are peptide hormones EXCEPT:",
      "options": ["Insulin", "Glucagon", "Cortisol", "ADH"],
      "answer": 2
    },
    {
      "q": "All are symptoms of hypothyroidism EXCEPT:",
      "options": ["Weight gain", "Heat intolerance", "Lethargy", "Cold intolerance"],
      "answer": 1
    },
    {
      "q": "Difference between endocrine/exocrine:",
      "options": ["Endocrine uses ducts", "Exocrine secretes into blood", "Pancreas has both functions", "Thyroid is exocrine"],
      "answer": 2
    },
    {
      "q": "______ hormone regulates circadian rhythm.",
      "options": ["Melatonin", "Insulin", "Oxytocin", "TSH"],
      "answer": 0
    },
    {
      "q": "ADH is synthesized in:",
      "options": ["Anterior pituitary", "Posterior pituitary", "Hypothalamus", "Kidney"],
      "answer": 2
    },
    {
      "q": "Cushing's syndrome involves:",
      "options": ["Low cortisol", "High cortisol", "Low insulin", "High calcium"],
      "answer": 1
    },
    {
      "q": "Common cause of Type 2 diabetes:",
      "options": ["Viral infection", "Autoimmunity", "Obesity", "Iodine deficiency"],
      "answer": 2
    },
    {
      "q": "Cretinism is characterized by:",
      "options": ["Adult hypothyroidism", "Childhood hyperthyroidism", "Childhood hypothyroidism", "Adrenal insufficiency"],
      "answer": 2
    },
    {
      "q": "Tetany often seen in:",
      "options": ["Hyperparathyroidism", "Hypoparathyroidism", "Hyperthyroidism", "Cushing's syndrome"],
      "answer": 1
    },
    {
      "q": "Diabetes insipidus most often due to:",
      "options": ["Insulin deficiency", "Glucagon excess", "ADH deficiency", "Aldosterone deficiency"],
      "answer": 2
    },
    {
      "q": "Functions: Muscle growth, bone density, voice deepening. Related to?",
      "options": ["Estrogen", "Progesterone", "Testosterone", "Cortisol"],
      "answer": 2
    },
    {
      "q": "Location: Above kidneys, inner medulla, outer cortex. Describes?",
      "options": ["Pancreas", "Thyroid", "Adrenal glands", "Ovaries"],
      "answer": 2
    },
    {
      "q": "Positive feedback is mostly seen with:",
      "options": ["Insulin", "Oxytocin", "Thyroxine", "Cortisol"],
      "answer": 1
    },
    {
      "q": "Hormone: Glucocorticoids. Function:?",
      "options": ["Sodium reabsorption", "Stress response", "Calcium regulation", "Milk production"],
      "answer": 1
    },
    {
      "q": "Which are tropic hormones? I. TSH II. ACTH III. FSH IV. Prolactin",
      "options": ["I, II, and III", "I and IV", "II, III, and IV", "All of the above"],
      "answer": 0
    },
    {
      "q": "Mismatched hormone-disorder:",
      "options": ["Insulin - Diabetes mellitus", "Thyroxine - Goiter", "Cortisol - Addison's disease", "PTH - Tetany"],
      "answer": 2
    },
    {
      "q": "Assertion: Calcitonin lowers blood calcium. Reason: Stimulates bone deposition.",
      "options": ["Both true; Reason explains", "Both true; No relation", "Assertion true; Reason false", "Assertion false; Reason true"],
      "answer": 0
    },
    {
      "q": "NOT functions of oxytocin:",
      "options": ["Uterine contraction", "Milk ejection", "Blood glucose regulation", "Social bonding"],
      "answer": 2
    },
    {
      "q": "NOT secreted by ovaries: I. Estrogen II. Progesterone III. Testosterone IV. Insulin",
      "options": ["I and II", "III and IV", "II and III", "I and IV"],
      "answer": 1
    },
    {
      "q": "Which stimulates cortisol release?",
      "options": ["TSH", "ACTH", "FSH", "LH"],
      "answer": 1
    },
    {
      "q": "Match hormone with function: 1. PTH 2. Calcitonin 3. Insulin 4. Glucagon",
      "options": ["1 - B, 2 - A, 3 - C, 4 - D", "1 - A, 2 - B, 3 - D, 4 - C", "1 - D, 2 - C, 3 - B, 4 - A", "1 - C, 2 - D, 3 - A, 4 - B"],
      "answer": 0
    },
    {
      "q": "Incorrect about diabetes:",
      "options": ["Type 1 requires insulin injections", "Type 2 involves insulin resistance", "Both types show low blood glucose", "Can cause vascular damage"],
      "answer": 2
    },
    {
      "q": "______ cells secrete glucagon.",
      "options": ["Alpha cells", "Beta cells", "Delta cells", "Acinar cells"],
      "answer": 0
    },
    {
      "q": "Number of hormones from posterior pituitary:",
      "options": ["1", "2", "3", "4"],
      "answer": 1
    },
    {
      "q": "Primary function of aldosterone:",
      "options": ["Glucose regulation", "Sodium reabsorption", "Calcium balance", "Growth promotion"],
      "answer": 1
    },
    {
      "q": "All use intracellular receptors EXCEPT:",
      "options": ["Cortisol", "Thyroxine", "Insulin", "Testosterone"],
      "answer": 2
    },
    {
      "q": "Correct pair:",
      "options": ["Epinephrine - Steroid", "Insulin - Second messenger", "Thyroxine - Peptide", "Cortisol - Membrane receptor"],
      "answer": 1
    },
    {
      "q": "Patient: Polyturia, polydipsia, high blood glucose. Diagnosis?",
      "options": ["Diabetes insipidus", "Diabetes mellitus", "Addison's disease", "Cushing's syndrome"],
      "answer": 1
    },
    {
      "q": "BEST describes hormone receptors:",
      "options": ["Present on all cells", "Determine hormone specificity", "Only in endocrine glands", "Always on cell membrane"],
      "answer": 1
    },
    {
      "q": "Most important feature of target cells:",
      "options": ["Location near glands", "Specific receptors", "High metabolic rate", "Large size"],
      "answer": 1
    },
    {
      "q": "ALWAYS true for steroid hormones:",
      "options": ["Water-soluble", "Derived from cholesterol", "Use cAMP", "Fast-acting"],
      "answer": 1
    },
    {
      "q": "Characteristic of peptide hormones:",
      "options": ["Lipid-soluble", "Direct gene activation", "Fast response", "Intracellular receptors"],
      "answer": 2
    },
    {
      "q": "Dwarfism may result from lack of:",
      "options": ["Thyroxine", "Insulin", "Growth hormone", "Cortisol"],
      "answer": 2
    },
    {
      "q": "Thymus location:",
      "options": ["Neck", "Chest", "Abdomen", "Brain"],
      "answer": 1
    },
    {
      "q": "Prolactin is used for:",
      "options": ["Milk production", "Uterine contraction", "Growth promotion", "Stress response"],
      "answer": 0
    },
    {
      "q": "Hormone solubility classification based on:",
      "options": ["Molecular weight", "Amino acid sequence", "Lipid/water affinity", "Target organ"],
      "answer": 2
    },
    {
      "q": "Criteria for hormone classification:",
      "options": ["Color and taste", "Stability and complexity", "Production rate", "Gland size"],
      "answer": 1
    },
    {
      "q": "Against typical hormone action:",
      "options": ["Insulin binding membrane receptor", "Cortisol entering nucleus", "Thyroxine using second messenger", "Epinephrine acting fast"],
      "answer": 2
    },
    {
      "q": "Most suitable for long-term stress:",
      "options": ["Epinephrine", "Cortisol", "Insulin", "Thyroxine"],
      "answer": 1
    },
    {
      "q": "Common in T3 and T4:",
      "options": ["Contain iodine", "Steroid hormones", "Secreted by parathyroid", "Lower metabolism"],
      "answer": 0
    },
    {
      "q": "How Type 1 diabetes differs from Type 2:",
      "options": ["Type 1 has insulin resistance", "Type 2 is autoimmune", "Type 1 has no insulin production", "Type 2 requires insulin injections"],
      "answer": 2
    },
    {
      "q": "ANP hormone used for:",
      "options": ["Increase blood pressure", "Decrease blood pressure", "Increase sodium retention", "Stimulate aldosterone"],
      "answer": 1
    },
    {
      "q": "Correct pair:",
      "options": ["Oxytocin - Labor induction", "ADH - Uterine contraction", "Prolactin - Water retention", "TSH - Adrenal stimulation"],
      "answer": 0
    },
    {
      "q": "Key role of hypothalamus:",
      "options": ["Direct hormone production", "Pituitary regulation", "Digestion control", "Calcium regulation"],
      "answer": 1
    },
    {
      "q": "Advantage of negative feedback:",
      "options": ["Prevents overproduction", "Amplifies responses", "Causes cascades", "Rare in endocrine system"],
      "answer": 0
    },
    {
      "q": "Disadvantage of positive feedback:",
      "options": ["Maintains homeostasis", "Requires external interruption", "Prevents overproduction", "Common in hormones"],
      "answer": 1
    },
    {
      "q": "Solution for vitamin D activation:",
      "options": ["PTH action", "Calcitonin secretion", "Insulin injection", "Cortisol treatment"],
      "answer": 0
    },
    {
      "q": "Property of mineralocorticoids:",
      "options": ["Glucose regulation", "Sodium regulation", "Growth promotion", "Immune suppression"],
      "answer": 1
    },
    {
      "q": "All are corticosteroids EXCEPT:",
      "options": ["Cortisol", "Aldosterone", "Epinephrine", "Androgens"],
      "answer": 2
    },
    {
      "q": "All are amino acid-derived hormones EXCEPT:",
      "options": ["Thyroxine", "Epinephrine", "Insulin", "Melatonin"],
      "answer": 2
    },
    {
      "q": "Difference: Anterior vs posterior pituitary",
      "options": ["Anterior stores hypothalamic hormones", "Posterior produces its own hormones", "Anterior has glandular tissue", "Posterior is neural tissue"],
      "answer": 2
    },
    {
      "q": "______ stimulates uterine contractions during labor.",
      "options": ["Oxytocin", "Progesterone", "Prolactin", "Estrogen"],
      "answer": 0
    },
    {
      "q": "Origin of releasing hormones:",
      "options": ["Anterior pituitary", "Posterior pituitary", "Hypothalamus", "Thyroid"],
      "answer": 2
    },
    {
      "q": "Importance of HCG:",
      "options": ["Pregnancy detection", "Blood glucose control", "Stress response", "Calcium regulation"],
      "answer": 0
    },
    {
      "q": "Common cause of hyperthyroidism:",
      "options": ["Iodine deficiency", "Autoimmunity (Graves)", "Vitamin D excess", "Insulin resistance"],
      "answer": 1
    },
    {
      "q": "Gigantism characterized by:",
      "options": ["Short stature", "Childhood GH excess", "Adult GH deficiency", "Thyroid failure"],
      "answer": 1
    },
    {
      "q": "Acromegaly often seen in:",
      "options": ["Children", "Adults with GH excess", "Elderly with calcium deficiency", "Newborns"],
      "answer": 1
    },
    {
      "q": "Diabetes mellitus complications most often due to:",
      "options": ["Vascular damage", "Bone fractures", "Respiratory failure", "Neural degeneration"],
      "answer": 0
    },
    {
      "q": "Functions: Glycogen breakdown, gluconeogenesis, lipolysis. Related to?",
      "options": ["Insulin", "Glucagon", "Cortisol", "Thyroxine"],
      "answer": 1
    },
    {
      "q": "Location: Behind stomach, endocrine/exocrine, islets of Langerhans. Describes?",
      "options": ["Liver", "Pancreas", "Spleen", "Kidney"],
      "answer": 1
    },
    {
      "q": "Steroid hormones are mostly synthesized from:",
      "options": ["Amino acids", "Cholesterol", "Glucose", "Protein"],
      "answer": 1
    },
    {
      "q": "Hormone: Melatonin. Function:?",
      "options": ["Stress response", "Circadian rhythm", "Growth promotion", "Milk production"],
      "answer": 1
    },
    {
      "q": "Which hormones use intracellular receptors? I. Cortisol II. Thyroxine III. Insulin IV. Glucagon",
      "options": ["I and II", "I and III", "II and IV", "III and IV"],
      "answer": 0
    },
    {
      "q": "Which hormone-target organ pair is mismatched?",
      "options": ["TSH → Thyroid", "ACTH → Adrenal cortex", "FSH → Kidneys", "Oxytocin → Uterus"],
      "answer": 2
    },
    {
      "q": "Which is INCORRECT about peptide hormones?",
      "options": ["Bind to membrane receptors", "Use second messengers", "Include insulin and glucagon", "Cross cell membranes freely"],
      "answer": 3
    },
    {
      "q": "Assertion: Calcitonin lowers blood calcium. Reason: It inhibits osteoclast activity.",
      "options": ["Both true; Reason explains Assertion", "Both true; Reason irrelevant", "Assertion true; Reason false", "Both false"],
      "answer": 0
    }
  ]
},
        {
  "id": "T2",
  "title": "BIOLOGY SINDH MDCAT",
  "subject": "Biology",
  "chapter": "6. ENZYMES",
  "exam": "MDCAT",
  "province": "Sindh",
  "mcqs": [
    {
      "q": "Which of the following are characteristics of enzymes?\nA) They are proteins.\nB) They are sensitive to temperature.\nC) They are consumed in the reaction.\nD) They are specific in nature.",
      "options": ["A) A, B, C", "B) B, C, D", "C) A, B, D", "D) A, B, C, D"],
      "answer": 2
    },
    {
      "q": "Which of the following statements about enzymes are correct?\nI. Enzymes are biocatalysts produced in the protoplasm.\nII. All enzymes are proteins.\nIII. Enzymes remain chemically unchanged during the reaction.\nIV. Enzymes are not specific in function.",
      "options": ["A) I, II", "B) II, III", "C) I, IV", "D) II, IV"],
      "answer": 1
    },
    {
      "q": "Which of the following statements about enzymes is INCORRECT?",
      "options": [
        "A) Enzymes are sensitive to pH.",
        "B) Enzymes increase the activation energy of a reaction.",
        "C) Enzymes are not consumed in the reaction.",
        "D) Enzymes are specific in nature."
      ],
      "answer": 1
    },
    {
      "q": "What is the primary role of enzymes in biological systems?",
      "options": [
        "A) To provide energy for metabolic reactions",
        "B) To increase the temperature of the reaction",
        "C) To lower the activation energy of reactions",
        "D) To change the equilibrium of the reaction"
      ],
      "answer": 2
    },
    {
      "q": "Match the following:\n| Column I (Enzyme) | Column II (Function) |\n| Pepsin | a. Breakdown of fats |\n| Amylase | b. Hydrolysis of proteins |\n| Lipase | c. Breakdown of starch |\n| DNA polymerase | d. Synthesis of DNA |",
      "options": [
        "A) 1-b, 2-c, 3-a, 4-d",
        "B) 1-c, 2-b, 3-a, 4-d",
        "C) 1-b, 2-a, 3-c, 4-d",
        "D) 1-d, 2-c, 3-b, 4-a"
      ],
      "answer": 0
    },
    {
      "q": "Which of the following correctly matches the enzyme with its cofactor?",
      "options": [
        "A) Chlorophyll: Magnesium",
        "B) Carbonic anhydrase: Zinc",
        "C) Cytochrome oxidase: Copper",
        "D) All of the above"
      ],
      "answer": 3
    },
    {
      "q": "Which of the following is a mismatched pair?",
      "options": [
        "A) Enzyme: Pepsin - Substrate: Proteins",
        "B) Enzyme: Lipase - Substrate: Lipids",
        "C) Enzyme: Sucrase - Substrate: Lactose",
        "D) Enzyme: Amylase - Substrate: Starch"
      ],
      "answer": 2
    },
    {
      "q": "In feedback inhibition, the end product of a metabolic pathway binds to:",
      "options": [
        "A) The substrate of the first enzyme",
        "B) The active site of the first enzyme",
        "C) An allosteric site on the first enzyme",
        "D) The product of the last enzyme"
      ],
      "answer": 2
    },
    {
      "q": "An enzyme is found to have a higher optimal temperature than most human enzymes. Which of the following is most likely true about this enzyme?",
      "options": [
        "A) It is derived from a thermophilic bacterium.",
        "B) It is a ribozyme.",
        "C) It has a lower molecular weight.",
        "D) It is denatured at 37°C."
      ],
      "answer": 0
    },
    {
      "q": "Consider the reaction: X → Y → Z → A. If product A inhibits the enzyme that converts X to Y, what is this mechanism called?",
      "options": [
        "A) Competitive inhibition",
        "B) Non-competitive inhibition",
        "C) Feedback inhibition",
        "D) Uncompetitive inhibition"
      ],
      "answer": 2
    },
    {
      "q": "Arrange the following steps of enzyme action in the correct sequence:\nI. Formation of enzyme-substrate complex\nII. Release of product\nIII. Binding of substrate to active site\nIV. Conversion of substrate to product",
      "options": [
        "A) I, II, III, IV",
        "B) III, I, IV, II",
        "C) IV, I, III, II",
        "D) II, I, IV, III"
      ],
      "answer": 1
    },
    {
      "q": "The following are features of:\nI. Organic substances\n2. Catalyze specific reactions\n3. Mostly proteinaceous\n4. Sensitive to temperature and pH\n5. Lower activation energy\n6. Remain unchanged after reaction",
      "options": ["A) Hormones", "B) Enzymes", "C) Antibodies", "D) Vitamins"],
      "answer": 1
    },
    {
      "q": "Which of the following are true about the induced fit model?\nI. The active site is rigid.\nII. The substrate induces a change in the enzyme's shape.\nIII. The enzyme is complementary to the substrate only after binding.\nIV. It was proposed by Emil Fischer.",
      "options": ["A) I and II", "B) II and III", "C) III and IV", "D) I and IV"],
      "answer": 1
    },
    {
      "q": "Which of the following is an INCORRECT statement about enzyme inhibitors?",
      "options": [
        "A) Competitive inhibitors bind to the active site.",
        "B) Non-competitive inhibitors bind to a site other than the active site.",
        "C) Uncompetitive inhibitors bind only to the enzyme-substrate complex.",
        "D) Feedback inhibition is a type of competitive inhibition."
      ],
      "answer": 3
    },
    {
      "q": "Which of the following is a coenzyme?",
      "options": ["A) Magnesium ion", "B) NAD+", "C) Heme", "D) Zinc ion"],
      "answer": 1
    },
    {
      "q": "Match the following:\n| Model | Scientist |\n| Lock and key model | a. Koshland |\n| Induced fit model | b. Emil Fischer |\n| Ribozyme discovery | c. Thomas Cech and Sidney Altman |\n| Feedback inhibition | d. End product inhibition |",
      "options": [
        "A) 1-b, 2-a, 3-c, 4-d",
        "B) 1-a, 2-b, 3-c, 4-d",
        "C) 1-b, 2-a, 3-d, 4-c",
        "D) 1-c, 2-d, 3-a, 4-b"
      ],
      "answer": 0
    },
    {
      "q": "In a reaction catalyzed by an enzyme, if the substrate concentration is increased beyond a certain point, the rate of reaction does not increase. Why?",
      "options": [
        "A) The enzyme becomes denatured.",
        "B) The enzyme is inhibited by the product.",
        "C) The enzyme is saturated with substrate.",
        "D) The enzyme is consumed in the reaction."
      ],
      "answer": 2
    },
    {
      "q": "If an enzyme has a prosthetic group, what can be inferred?",
      "options": [
        "A) The prosthetic group is loosely bound and acts as a coenzyme.",
        "B) The prosthetic group is covalently bound and an integral part of the enzyme.",
        "C) The enzyme can function without the prosthetic group.",
        "D) The prosthetic group is always inorganic."
      ],
      "answer": 1
    },
    {
      "q": "Which type of inhibition can be overcome by increasing the substrate concentration?",
      "options": [
        "A) Non-competitive inhibition",
        "B) Uncompetitive inhibition",
        "C) Competitive inhibition",
        "D) Allosteric inhibition"
      ],
      "answer": 2
    },
    {
      "q": "Why do enzymes not alter the equilibrium of a reaction?",
      "options": [
        "A) They lower the activation energy for both forward and reverse reactions equally.",
        "B) They are consumed in the reaction.",
        "C) They only catalyze the forward reaction.",
        "D) They increase the free energy change."
      ],
      "answer": 0
    },
    {
      "q": "The catalytic site of an enzyme is responsible for:",
      "options": [
        "A) Binding the substrate",
        "B) Performing the chemical transformation",
        "C) Releasing the product",
        "D) All of the above"
      ],
      "answer": 1
    },
    {
      "q": "What would be the effect on an enzyme-catalyzed reaction if an allosteric activator binds to the enzyme?",
      "options": [
        "A) The enzyme's active site would become blocked.",
        "B) The enzyme would denature.",
        "C) The enzyme's affinity for the substrate might increase.",
        "D) The enzyme would become inhibited."
      ],
      "answer": 2
    },
    {
      "q": "Which of the following are characteristics of ribozymes?\nI. They are made of RNA.\nII. They are protein in nature.\nIII. They catalyze reactions in genetic information processing.\nIV. They were discovered in the 1980s.",
      "options": [
        "A) I, II, III",
        "B) I, III, IV",
        "C) II, III, IV",
        "D) I, II, IV"
      ],
      "answer": 1
    },
    {
      "q": "Which of the following is INCORRECT about enzyme classification?",
      "options": [
        "A) Transferases transfer groups.",
        "B) Hydrolases break bonds by hydrolysis.",
        "C) Lyases break bonds without hydrolysis.",
        "D) Ligases break down molecules."
      ],
      "answer": 3
    },
    {
      "q": "Which enzyme class catalyzes the conversion of glucose-6-phosphate to fructose-6-phosphate?",
      "options": ["A) Transferase", "B) Isomerase", "C) Lyase", "D) Hydrolase"],
      "answer": 1
    },
    {
      "q": "The following are features of enzyme inhibition:\n1. Reversible\n2. Binds to allosteric site\n3. Inhibited by its own product\n4. Shuts down the pathway\n5. Occurs in metabolic pathways\n6. Binds to the first enzyme of the pathway\nThese features are related to:",
      "options": [
        "A) Competitive inhibition",
        "B) Non-competitive inhibition",
        "C) Feedback inhibition",
        "D) Uncompetitive inhibition"
      ],
      "answer": 2
    },
    {
      "q": "Match the term with its definition:\n| Term | Definition |\n| Apoenzyme | a. Enzyme with cofactor |\n| Holoenzyme | b. Protein part of enzyme |\n| Coenzyme | c. Organic cofactor, loosely bound |\n| Prosthetic group | d. Organic cofactor, tightly bound |",
      "options": [
        "A) 1-b, 2-a, 3-c, 4-d",
        "B) 1-a, 2-b, 3-d, 4-c",
        "C) 1-c, 2-d, 3-b, 4-a",
        "D) 1-d, 2-c, 3-a, 4-b"
      ],
      "answer": 0
    },
    {
      "q": "In the presence of a non-competitive inhibitor, what happens to the Vmax and Km of the enzyme?",
      "options": [
        "A) Vmax decreases, Km unchanged",
        "B) Vmax unchanged, Km increases",
        "C) Vmax increases, Km decreases",
        "D) Vmax unchanged, Km decreases"
      ],
      "answer": 0
    },
    {
      "q": "What is the role of HCl in the activation of pepsinogen to pepsin?",
      "options": [
        "A) It denatures the enzyme.",
        "B) It removes an inhibitory polypeptide.",
        "C) It acts as a cofactor.",
        "D) It changes the pH to optimal for activity."
      ],
      "answer": 1
    },
    {
      "q": "Arrange the following in the sequence of events in feedback inhibition:\nI. Accumulation of end product\nII. Binding of end product to the first enzyme\nIII. Inhibition of the first enzyme\nIV. Shutdown of the pathway",
      "options": [
        "A) I, II, III, IV",
        "B) II, I, III, IV",
        "C) I, III, II, IV",
        "D) II, III, I, IV"
      ],
      "answer": 0
    },
    {
      "q": "Which statement about enzymes is INCORRECT?",
      "options": [
        "A. Enzymes are not consumed in reactions.",
        "B. All enzymes have an optimal pH.",
        "C. Enzymes can catalyze both forward and reverse reactions.",
        "D. Enzymes increase the free energy change of a reaction."
      ],
      "answer": 3
    },
    {
      "q": "Match the following:\n| 1. Temperature effect | a. Rate doubles per 10°C rise |\n| 2. pH effect | b. Bell-shaped curve |\n| 3. Substrate concentration | c. Michaelis-Menten kinetics |",
      "options": [
        "A) 1a, 2b, 3c",
        "B) 1b, 2a, 3c",
        "C) 1c, 2b, 3a",
        "D) 1a, 2c, 3b"
      ],
      "answer": 0
    },
    {
      "q": "Which factor does NOT affect enzyme activity?",
      "options": [
        "A) Light intensity",
        "B) pH",
        "C) Temperature",
        "D) Substrate concentration"
      ],
      "answer": 0
    },
    {
      "q": "Sequence in feedback inhibition:\nI. End product accumulates\nII. Binds to allosteric site\nIII. Conformational change in enzyme\nIV. Pathway shuts down",
      "options": [
        "A) I, II, III, IV",
        "B) II, I, IV, III",
        "C) III, II, I, IV",
        "D) IV, I, II, III"
      ],
      "answer": 0
    },
    {
      "q": "If an enzyme is saturated with substrate, what limits the reaction rate?",
      "options": [
        "A) Substrate concentration",
        "B) Enzyme concentration",
        "C) Product accumulation",
        "D) Cofactor availability"
      ],
      "answer": 1
    },
    {
      "q": "Match the following:\n| Column I | Column II |\n| Competitive inhibition | a. Binds ES complex |\n| Non-competitive inhibition | b. Binds active site |\n| Uncompetitive inhibition | c. Binds allosteric site |",
      "options": [
        "A) 1b, 2c, 3a",
        "B) 1a, 2b, 3c",
        "C) 1c, 2a, 3b",
        "D) 1b, 2a, 3c"
      ],
      "answer": 0
    },
    {
      "q": "What is the significance of enzyme inhibition in drug discovery?",
      "options": [
        "A) Inhibitors can act as drugs to block pathogenic enzymes.",
        "B) Inhibitors increase enzyme activity.",
        "C) Drugs are always enzyme activators.",
        "D) Inhibition is irreversible in drugs."
      ],
      "answer": 0
    },
    {
      "q": "In uncompetitive inhibition, increasing substrate concentration:",
      "options": [
        "A) Increases inhibition",
        "B) Decreases inhibition",
        "C) Has no effect",
        "D) Denatures enzyme"
      ],
      "answer": 0
    },
    {
      "q": "Why is the induced fit model more accurate than lock and key for some enzymes?",
      "options": [
        "A) Substrates are flexible.",
        "B) Enzymes undergo conformational changes to catalyze reactions.",
        "C) Active sites are rigid.",
        "D) Inhibitors bind covalently."
      ],
      "answer": 1
    },
    {
      "q": "Which of the following is true about enzymes?",
      "options": [
        "A) All enzymes are proteins",
        "B) All enzymes are RNA",
        "C) Some RNA molecules can act as enzymes",
        "D) Enzymes are only made of carbohydrates"
      ],
      "answer": 2
    },
    {
      "q": "Ribozymes are:",
      "options": [
        "A) Protein enzymes",
        "B) RNA molecules that function as enzymes",
        "C) DNA molecules that function as enzymes",
        "D) Carbohydrate molecules"
      ],
      "answer": 1
    },
    {
      "q": "Enzymes are specific in nature. This means:",
      "options": [
        "A) They can catalyze many different reactions",
        "B) They work only on specific substrates",
        "C) They are found only in specific organisms",
        "D) They are active only at specific pressures"
      ],
      "answer": 1
    },
    {
      "q": "Enzymes are sensitive to:",
      "options": [
        "A) Temperature only",
        "B) pH only",
        "C) Both temperature and pH",
        "D) Neither temperature nor pH"
      ],
      "answer": 2
    },
    {
      "q": "Enzymes that are made up of only protein are called:",
      "options": [
        "A) Simple enzymes",
        "B) Conjugated enzymes",
        "C) Ribozymes",
        "D) Apoenzymes"
      ],
      "answer": 0
    },
    {
      "q": "Enzymes that are made up of protein and a non-protein part are called:",
      "options": [
        "A) Simple enzymes",
        "B) Conjugated enzymes",
        "C) Ribozymes",
        "D) Apoenzymes"
      ],
      "answer": 1
    },
    {
      "q": "Which of the following is an example of a coenzyme?",
      "options": ["A) NAD", "B) Mg2+", "C) Cl-", "D) Heme"],
      "answer": 0
    },
    {
      "q": "An example of a prosthetic group is:",
      "options": [
        "A) NAD",
        "B) FAD",
        "C) The Mg-containing porphyrin of chlorophyll",
        "D) Mn2+"
      ],
      "answer": 2
    },
    {
      "q": "Pepsin is secreted in an inactive form called:",
      "options": ["A) Pepsinogen", "B) Propepsin", "C) Apoenzyme", "D) Zymogen"],
      "answer": 0
    },
    {
      "q": "Which model of enzyme action was proposed by Emil Fischer in 1898?",
      "options": [
        "A) Induced fit model",
        "B) Lock and key model",
        "C) Both a and b",
        "D) None of the above"
      ],
      "answer": 1
    },
    {
      "q": "According to the lock and key model:",
      "options": [
        "A) The enzyme is flexible and changes shape",
        "B) The enzyme has a rigid active site complementary to the substrate",
        "C) The substrate changes shape to fit the enzyme",
        "D) The enzyme and substrate bind randomly"
      ],
      "answer": 1
    },
    {
      "q": "Which model of enzyme action was proposed by Koshland in 1959?",
      "options": [
        "A) Lock and key model",
        "B) Induced fit model",
        "C) Both",
        "D) None"
      ],
      "answer": 1
    },
    {
      "q": "According to the induced fit model:",
      "options": [
        "A) The enzyme is rigid",
        "B) The substrate induces a change in the enzyme's structure",
        "C) The enzyme does not change",
        "D) The substrate is rigid"
      ],
      "answer": 1
    },
    {
      "q": "Activation energy is:",
      "options": [
        "A) The maximum energy required for a reaction",
        "B) The minimum energy required to activate atoms or molecules for a reaction",
        "C) The energy released during a reaction",
        "D) The energy stored in the substrate"
      ],
      "answer": 1
    },
    {
      "q": "How do enzymes affect the activation energy?",
      "options": [
        "A) They increase it",
        "B) They decrease it",
        "C) They do not change it",
        "D) They store it"
      ],
      "answer": 1
    },
    {
      "q": "Does the enzyme alter the equilibrium of the reaction?",
      "options": [
        "A) Yes, it shifts the equilibrium towards products",
        "B) Yes, it shifts the equilibrium towards reactants",
        "C) No, it only speeds up the reaction",
        "D) It depends on the enzyme"
      ],
      "answer": 2
    },
    {
      "q": "The temperature at which enzyme activity is maximum is called:",
      "options": [
        "A) Minimum temperature",
        "B) Maximum temperature",
        "C) Optimum temperature",
        "D) Denaturation temperature"
      ],
      "answer": 2
    },
    {
      "q": "For human enzymes, the optimum temperature is around:",
      "options": ["A) 0°C", "B) 25°C", "C) 37°C", "D) 100°C"],
      "answer": 2
    },
    {
      "q": "Thermophilic bacteria have optimum temperatures around:",
      "options": ["A) 25°C", "B) 37°C", "C) 70°C or higher", "D) 0°C"],
      "answer": 2
    },
    {
      "q": "The effect of pH on enzymes is that they:",
      "options": [
        "A) Work at all pH",
        "B) Work at specific pH",
        "C) Are not affected by pH",
        "D) Always work at pH 7"
      ],
      "answer": 1
    },
    {
      "q": "Competitive inhibition occurs when:",
      "options": [
        "A) The inhibitor binds to the active site",
        "B) The inhibitor binds to a site other than the active site",
        "C) The inhibitor binds to the substrate",
        "D) The inhibitor binds to the product"
      ],
      "answer": 0
    },
    {
      "q": "Competitive inhibition can be overcome by:",
      "options": [
        "A) Decreasing substrate concentration",
        "B) Increasing substrate concentration",
        "C) Increasing inhibitor concentration",
        "D) None of the above"
      ],
      "answer": 1
    },
    {
      "q": "Non-competitive inhibition occurs when:",
      "options": [
        "A) The inhibitor binds to the active site",
        "B) The inhibitor binds to a site other than the active site (allosteric site)",
        "C) The inhibitor binds to the substrate",
        "D) The inhibitor binds to the enzyme-substrate complex"
      ],
      "answer": 1
    },
    {
      "q": "Feedback inhibition is an example of:",
      "options": [
        "A) Competitive inhibition",
        "B) Non-competitive inhibition",
        "C) Uncompetitive inhibition",
        "D) None of the above"
      ],
      "answer": 1
    },
    {
      "q": "Uncompetitive inhibition occurs when:",
      "options": [
        "A) The inhibitor binds only to the enzyme",
        "B) The inhibitor binds only to the substrate",
        "C) The inhibitor binds only to the enzyme-substrate complex",
        "D) The inhibitor binds to the active site"
      ],
      "answer": 2
    },
    {
      "q": "Feedback inhibition is when:",
      "options": [
        "A) The enzyme is inhibited by its substrate",
        "B) The enzyme is inhibited by its product",
        "C) The enzyme is inhibited by a cofactor",
        "D) None of the above"
      ],
      "answer": 1
    },
    {
      "q": "Which class of enzymes catalyzes oxidation-reduction reactions?",
      "options": ["A) Transferase", "B) Hydrolase", "C) Oxidoreductase", "D) Ligase"],
      "answer": 2
    },
    {
      "q": "Hydrolases are:",
      "options": [
        "A) Enzymes that break bonds by hydrolysis",
        "B) Enzymes that transfer groups",
        "C) Enzymes that catalyze isomerization",
        "D) Enzymes that catalyze ligation"
      ],
      "answer": 0
    },
    {
      "q": "Isomerases catalyze:",
      "options": [
        "A) Intramolecular rearrangement to form isomers",
        "B) Hydrolysis",
        "C) Group transfer",
        "D) Ligation"
      ],
      "answer": 0
    },
    {
      "q": "Ligases catalyze:",
      "options": [
        "A) Cleavage of bonds",
        "B) Condensation reactions",
        "C) Isomerization",
        "D) Hydrolysis"
      ],
      "answer": 1
    },
    {
      "q": "Based on substrate, enzymes acting on proteins are called:",
      "options": ["A) Lipases", "B) Proteases", "C) Glycosidases", "D) Nucleases"],
      "answer": 1
    },
    {
      "q": "Lipases act on:",
      "options": ["A) Proteins", "B) Fats", "C) Carbohydrates", "D) Nucleic acids"],
      "answer": 1
    },
    {
      "q": "Which enzyme acts on amylose?",
      "options": ["A) Cellulase", "B) Maltase", "C) Amylase", "D) Sucrase"],
      "answer": 2
    },
    {
      "q": "Which enzyme acts on lactose?",
      "options": ["A) Cellulase", "B) Lactase", "C) Amylase", "D) Sucrase"],
      "answer": 1
    },
    {
      "q": "Enzyme inhibition where the inhibitor binds only to the ES complex is:",
      "options": [
        "A) Competitive",
        "B) Non-competitive",
        "C) Uncompetitive",
        "D) Feedback"
      ],
      "answer": 2
    },
    {
      "q": "The enzyme that catalyzes the conversion of glucose-6-phosphate to fructose-6-phosphate is:",
      "options": ["A) A transferase", "B) An isomerase", "C) A ligase", "D) A hydrolase"],
      "answer": 1
    },
    {
      "q": "Which of the following is true for enzyme-catalyzed reactions?",
      "options": [
        "A) The reaction is slower than without enzyme",
        "B) The free energy change is more negative",
        "C) The activation energy is lowered",
        "D) The equilibrium constant is changed"
      ],
      "answer": 2
    },
    {
      "q": "At low substrate concentrations, the rate of enzyme activity is:",
      "options": [
        "A) Directly proportional to substrate concentration",
        "B) Inversely proportional",
        "C) Unaffected",
        "D) None"
      ],
      "answer": 0
    },
    {
      "q": "A prosthetic group is:",
      "options": [
        "A) A coenzyme that is loosely bound",
        "B) A cofactor that is covalently and permanently bound",
        "C) An inorganic activator",
        "D) An inhibitor"
      ],
      "answer": 1
    },
    {
      "q": "Metabolic activities of the cell are essential for life and depend on:",
      "options": ["A) Enzymes", "B) Hormones", "C) Vitamins", "D) Minerals"],
      "answer": 0
    },
    {
      "q": "Ribozymes were discovered by:",
      "options": [
        "A) Friedrich Wilhelm Kuhn",
        "B) Emil Fischer",
        "C) Thomas Cech and Sidney Altman",
        "D) Koshland"
      ],
      "answer": 2
    },
    {
      "q": "The plateau in enzyme activity at high substrate concentration is because:",
      "options": [
        "A) The enzyme is denatured",
        "B) The enzyme is saturated",
        "C) The inhibitor is present",
        "D) The pH changes"
      ],
      "answer": 1
    },
    {
      "q": "Kinases are a type of:",
      "options": [
        "A) Oxidoreductase",
        "B) Transferase",
        "C) Hydrolase",
        "D) Lyase"
      ],
      "answer": 1
    },
    {
      "q": "An enzyme that breaks down RNA is:",
      "options": [
        "A) RNA polymerase",
        "B) RNA ligase",
        "C) RNAase",
        "D) RNA isomerase"
      ],
      "answer": 2
    },
    {
      "q": "Which of the following is NOT a characteristic of enzymes?",
      "options": [
        "A) They are proteins or RNA",
        "B) They are consumed in the reaction",
        "C) They are specific",
        "D) They have active sites"
      ],
      "answer": 1
    },
    {
      "q": "Enzymes speed up reactions by:",
      "options": [
        "A) Increasing the activation energy",
        "B) Decreasing the activation energy",
        "C) Changing the equilibrium",
        "D) Increasing the product energy"
      ],
      "answer": 1
    },
    {
      "q": "Which factor does NOT affect enzyme activity?",
      "options": [
        "A) Temperature",
        "B) pH",
        "C) Enzyme concentration",
        "D) Color of the enzyme"
      ],
      "answer": 3
    },
    {
      "q": "Competitive inhibitors resemble the:",
      "options": ["A) Product", "B) Enzyme", "C) Substrate", "D) Co-factor"],
      "answer": 2
    },
    {
      "q": "Feedback inhibition is a type of:",
      "options": [
        "A) Competitive inhibition",
        "B) Non-competitive inhibition",
        "C) Uncompetitive inhibition",
        "D) Mixed inhibition"
      ],
      "answer": 1
    },
    {
      "q": "Transferases are involved in:",
      "options": [
        "A) Transfer of groups",
        "B) Hydrolysis",
        "C) Isomerization",
        "D) Bond breaking without hydrolysis"
      ],
      "answer": 0
    },
    {
      "q": "The enzyme that acts on lactose is:",
      "options": ["A) Sucrase", "B) Maltase", "C) Lactase", "D) Cellulase"],
      "answer": 2
    },
    {
      "q": "Competitive inhibition can be overcome by:",
      "options": [
        "A) Decreasing substrate concentration",
        "B) Increasing substrate concentration",
        "C) Increasing inhibitor concentration",
        "D) Changing pH"
      ],
      "answer": 1
    },
    {
      "q": "The enzyme classification that includes DNA ligase is:",
      "options": [
        "A) Oxidoreductase",
        "B) Transferase",
        "C) Hydrolase",
        "D) Ligase"
      ],
      "answer": 3
    },
    {
      "q": "A holoenzyme is:",
      "options": [
        "A) The protein part only",
        "B) The co-factor only",
        "C) The active enzyme with co-factor",
        "D) The inactive precursor"
      ],
      "answer": 2
    },
    {
      "q": "In competitive inhibition, the apparent Km (Michaelis constant) of the enzyme:",
      "options": ["A) Increases", "B) Decreases", "C) Remains the same", "D) Becomes zero"],
      "answer": 0
    },
    {
      "q": "In non-competitive inhibition, the Vmax (maximum velocity) of the enzyme:",
      "options": ["A) Increases", "B) Decreases", "C) Remains the same", "D) Doubles"],
      "answer": 1
    },
    {
      "q": "Which enzyme class catalyzes the conversion of glucose-6-phosphate to fructose-6-phosphate?",
      "options": ["A) Transferase", "B) Isomerase", "C) Lyase", "D) Hydrolase"],
      "answer": 1
    },
    {
      "q": "If an enzyme is added to a reaction at equilibrium:",
      "options": [
        "A) More product forms",
        "B) More substrate forms",
        "C) The free energy changes",
        "D) Nothing happens"
      ],
      "answer": 3
    },
    {
      "q": "Enzymes are specific because:",
      "options": [
        "A) They are proteins",
        "B) Their active site matches the substrate",
        "C) They work at high temperatures",
        "D) They are large molecules"
      ],
      "answer": 1
    }
  ]
} 
],
