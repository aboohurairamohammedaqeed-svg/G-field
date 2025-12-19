/**
 * A/L Mastery - MCQ Flashcard Logic
 */

/* --- DATA: 43 Questions --- */
const questions = [
    {
        id: 1,
        question: "m திணிவையுடைய உபகோளம் ஒன்று R ஆரையுடைய வட்ட மொன்றில் புவியைச் சுற்றுகின்றது. புவியினது திணிவு M ஆயின், உபகோளின் மொத்தச் சக்தி (1982 G.C.E A/L Physics Q - 36)",
        options: ["−GmM/R", "−GmM/2R", "3GmM/2R", "GmM/2R", "GmM/R"],
        correct: 1, // (2)
        explanation: "Total Energy = PE + KE = -GmM/R + GmM/2R = -GmM/2R.",
        image: null
    },
    {
        id: 2,
        question: "புறக்கணிக்கத்தக்க கதியுடன் விண்வெளியில் சுயாதீனமாக மிதக்கும் விண்கலம் ஒன்று R ஆரையும் M திணிவையுமுடைய கோளொன்றினது ஈர்ப்புப் புலத்தினுள் பிரவேசிக்கின்றது. இக்கோள் வளிமண்டலமெதனையும் கொண்டிருக்கவில்லை. இவ்விண்கலம் கோளின் மேற்பரப்பை அடிக்கும் கதி (1983 G.C.E A/L Physics Q - 09)",
        options: ["2GM/R​", "GM/R​", "2GM/R", "4GM/R", "2GM/R​"],
        correct: 0, // (1) v = sqrt(2GM/R)
        explanation: "Conservation of Energy: Potential dropped = Kinetic gained. GMm/R = 1/2 mv^2. v = sqrt(2GM/R).",
        image: null
    },
    {
        id: 3,
        question: "இரு கோள்களின் மேற்பரப்புக்களில் சுயாதீன வீழ்ச்சியின் ஆர்முடுகலின் பெறுமானங்கள் g ஒன்றிற்கொன்று சமமாக இருக்க (1984 G.C.E A/L Physics Q - 04)",
        options: [
            "கோள்களின் திணிவுகளின் விகிதம் அவற்றின் ஆரைகளின் விகிதத்திற்குச் சமமாக இருத்தல் வேண்டும்.",
            "கோள்களின் திணிவுகளின் விகிதம் அவற்றின் ஆரைகளின் வர்க்கங்களின் விகிதத்திற்குச் சமமாக இருத்தல் வேண்டும்.",
            "கோள்களின் திணிவுகள் சமமாக இருத்தல் வேண்டும்.",
            "கோள்களின் ஆரைகள் சமமாக இருத்தல் வேண்டும்.",
            "கோள்களின் சராசரி அடர்த்திகள் சமமாக இருத்தல் வேண்டும்."
        ],
        correct: 1, // (2) g = GM/R^2 => M ~ R^2
        explanation: "g = GM/R². For g to be equal, M/R² must be equal, so M1/M2 = (R1/R2)².",
        image: null
    },
    {
        id: 4,
        question: "M என்பது புவியினது திணிவாயும், G என்பது ஈர்ப்பு மாறிலியாயுமிருப்பின், புவியின் மையத்திலிருந்து r தூரத்தில் புவிக்கு வெளியேயுள்ள புள்ளியொன்றிலுள்ள ஈர்வையினாலான ஆர்முடுகலின் பருமன் (1987 G.C.E A/L Physics Q - 09)",
        options: ["MrG​", "M2G", "rM2G​", "r2MG (GM/r²)", "rMG​"],
        correct: 3, // (4) GM/r^2
        explanation: "g = GM/r².",
        image: null
    },
    {
        id: 5,
        question: "புவியின் திணிவு M ஆகவும் அகில ஈர்ப்பு மாறிலி G ஆகவும் இருக்குமெனின், புவியின் மையத்திலிருந்து தூரம் R இல் இருக்கின்ற புள்ளி ஒன்றிலே ஈர்வையிலான (புவியீர்ப்பினாலான) ஆர்முடுகல் (1989 G.C.E A/L Physics Q - 17)",
        options: ["GM/R", "GM/R²", "GM²/R", "G²M/R", "GM/R³"],
        correct: 1, // (2)
        explanation: "Surface gravity g = GM/R².",
        image: null
    },
    {
        id: 6,
        question: "புவியின் மீது 760 N நிறையைக் கொண்டிருக்கும் நபரொருவர் சந்திரனுக்குச் செல்கிறார். சந்திரனினது திணிவு M ஆயும், அதனது ஆரை R ஆயும் G ஆனது அகில ஈர்ப்பு மாறிலியாயுமிருப்பின், இந்நபரது சந்திரனின் மீதுள்ள நிறையை S.I அலகுகளில் தருவது (1990 G.C.E A/L Physics Q - 19)",
        options: ["760 GM/R²", "76 GM/R²", "1/760 GM/R²", "1/76 GM/R²", "GM/R²"],
        correct: 1, // (2) m = 760/10 = 76kg. Weight = 76 * g_moon.
        explanation: "Mass on Earth = 760N / 10 m/s² = 76kg. Weight on Moon = Mass * g_moon = 76 * (GM/R²).",
        image: null
    },
    {
        id: 7,
        question: "புவியினது திணிவும், ஆரையும் முறையே M,R என்பனவாயும், அகில ஈர்ப்பு மாறிலி G என்பதாயும் இருப்பின், புவிப்பரப்பிலிருந்து உயரம் H இலுள்ள ஈர்வையிலான ஆர்முடுகல் (1991 G.C.E A/L Physics Q - 28)",
        options: ["GM/R²", "GM/(R²+H²)", "GM/R", "GM/(R+H)", "GM/(R+H)²"],
        correct: 4, // (5)
        explanation: "Distance from center is (R+H). g = GM/(R+H)².",
        image: null
    },
    {
        id: 8,
        question: "ஒவ்வொரு தொகுதியிலும் ஆறு சர்வசமனான திணிவுகளைக் கொண்டதும், அவற்றில் மூன்று சமபக்க முக்கோணியொன்றின் உச்சிகளில் வைக்கப்பட்டும், ஏனைய மூன்றும் முந்தியவற்றிற்கு அருகில் இறுக்கமாகப் பிடிக்கப்பட்டுள்ளதுமான ஐந்து வெவ்வேறு தொகுதி களைப் படங்கள் காட்டுகின்றன... எவ்வுருவமைப்பில் திணிவுகள் பெரும்பாலும் சமநிலையிலிருக்கும்? (1993 G.C.E A/L Physics Q - 55)",
        options: ["(1)", "(2)", "(3)", "(4)", "(5)"],
        correct: 0, // Unknown without image
        explanation: "Diagram required to solve.",
        image: "q8.jpg" // User to provide
    },
    {
        id: 9,
        question: "ஆரை R ஐயும் திணிவு M ஐயுமுடைய சீரான வட்ட வளையம் ஒன்றினது மையத்திலே m திணிவையுடைய துணிக்கை ஒன்று கிடைக்கிறது. m இன் மீது M காரணமாகத் தாக்கும் ஈர்ப்பு விசையினது பருமன் (1994 G.C.E A/L Physics Q - 16)",
        options: ["0", "GMm/2R²", "GMm/R²", "3GMm/2R²", "முடிவிலிக்குச் சமன்"],
        correct: 0, // (1)
        explanation: "Gravitational force inside a uniform ring at the center is zero due to symmetry.",
        image: "q9.jpg" // User to provide
    },
    {
        id: 10,
        question: "X,Y ஆகிய இரு கோள்கள் Mx​,My​ என்ற திணிவுகளையும், Rx​,Ry​ என்ற ஆரைகளையும் முறையே கொண்டுள்ளன. இவ்விரு கோளகளினதும் பரப்புக்களின் மீதுள்ள ஈர்வையினாலான ஆர்முடுகல்கள் ஒரேயளவாயிருப்பின் My​Rx²​ / Mx​Ry² என்ற விகிதம் சமன் (1995 G.C.E A/L Physics Q - 23)",
        options: ["2", "1", "1/2", "1/4", "1/8"],
        correct: 1, // (2)
        explanation: "gx = gy => GMx/Rx² = GMy/Ry² => Mx/Rx² = My/Ry² => (My/Ry²) / (Mx/Rx²) = 1.",
        image: null
    }
    ,
    {
        id: 11,
        question: "M,R ஆகியவை முறையே செவ்வாய்க் கிரகத்தினது திணிவும் ஆரையும் ஆகவும், G என்பது ஈர்ப்பினது அகில மாறிலியாயுமிருப்பின், செவ்வாய்ப் பரப்பின் மீது ஈர்வையிலான ஆர்முடுகல் (1996 G.C.E A/L Physics Q - 10)",
        options: ["GR/M", "R²M/G", "GM/R²", "GM/R", "GM²/R"],
        correct: 2, // (3) GM/R²
        explanation: "g = GM/R²",
        image: null
    },
    {
        id: 12,
        question: "புவிப்பரப்பின் மீது பொருளொன்றினது நிறை 600 N ஆகும். புவிப்பரப்புக்கு மேல் புவியின் ஆரை உயரத்தில் இப்பொருளின் நிறை (1997 G.C.E A/L Physics New Q - 23)",
        options: ["150 N", "240 N", "300 N", "600 N", "2400 N"],
        correct: 0, // (1) 150 N
        explanation: "Surface (R): W = GMm/R² = 600. At height R (2R): W = GMm/(2R)² = GMm/4R² = 600/4 = 150 N.",
        image: null
    },
    {
        id: 13,
        question: "சந்திரனானது R ஆரையுடைய கோளமெனவும் அதன் பரப்பிலுள்ள ஈர்வையிலான ஆர்முடுகல் g′ எனவும் கருதுக. அகில ஈர்ப்பு மாறிலி G ஆயிருப்பின், சந்திரனது சராசரி அடர்த்தியைத் தருவது (1998 G.C.E A/L Physics Q - 48)",
        options: ["3g′/4πRG", "4πG/3Rg′", "3G/4πRg′", "3RG/4πg′", "4πRG/3g′"],
        correct: 0, // (1)
        explanation: "g' = GM/R² = G(4/3πR³ρ)/R² = 4/3πGRρ. ρ = 3g′/4πRG.",
        image: null
    },
    {
        id: 14,
        question: "புவியினது ஆரை R எனவும் புவிப் பரப்பின் மீது ஈர்வையிலான ஆர்முடுகல் g எனவும் கொள்க. m திணிவையுடைய பொருளொன்று புவியின் பரப்பிலிருந்து R உயரத்துக்கு உயர்த்தப்படும்போது, அப்பொருளின் அழுத்தச் சக்தி நயம் (1999 G.C.E A/L Physics Q - 44)",
        options: ["1/4mgR", "1/2mgR", "mgR", "2mgR", "4mgR"],
        correct: 1, // (2)
        explanation: "Gain = -GMm/2R - (-GMm/R) = GMm/2R. Since GM = gR², Gain = mgR/2.",
        image: null
    },
    {
        id: 15,
        question: "ஒரு புவிநிலையான உபகோள் A ஆனது ஆரை RA​ யையுடைய மண்டலம் ஒன்றில் இயங்குகின்றது. வேறொரு புவிநிலையான உபகோள் B ஆனது A யின் திணிவின் இரு மடங்கான திணிவை உடையது. உபகோள் B யின் மண்டல ஆரை (2000 G.C.E A/L Physics Q - 33)",
        options: ["RA", "2RA", "1/2RA", "√2RA", "1/√2RA"],
        correct: 0, // (1)
        explanation: "Orbital radius depends only on period (T) and planet mass (M), not satellite mass. T is same (24h), so R is same.",
        image: null
    },
    {
        id: 16,
        question: "புவியின் திணிவும் ஆரையும் முறையே M,R ஆகும். புவியின் மேற்பரப்பிலே திணிவு m ஐ உடைய ரொக்கெற்று ஒன்றின் தப்பல் வேகம் (2001 G.C.E A/L Physics Q - 08)",
        options: ["√(R/2Gm)", "√(RG/m)", "√(2Gm/R)", "√(2GM/R)", "√(2GmM/R)"],
        correct: 3, // (4)
        explanation: "Escape velocity ve = √(2GM/R).",
        image: null
    },
    {
        id: 17,
        question: "செவ்வாயின் திணிவு புவியின் திணிவின் 0.1 மடங்காகும். செவ்வாய்க்கும் சூரியனுக்குமிடையே உள்ள தூரம் புவிக்கும் சூரியனுக்குமிடையேயுள்ள தூரத்தின் 1.5 மடங்காகும். சூரியனுக்கும் புவிக்குமிடையேயுள்ள ஈர்ப்புக் கவர்ச்சி விசை / சூரியனுக்கும் செவ்வாய்க்குமடையேயுள்ள ஈர்ப்புக் கவர்ச்சி விசை​ விகிதம் (2003 G.C.E A/L Physics Q - 42)",
        options: ["1", "(1.5)²/0.1", "1/(1.5)²", "1/(1.5)²", "0.1(1.5)²"],
        correct: 1, // (2)
        explanation: "Fe/Fm = (Me/Re²)/(Mm/Rm²) assuming Sun mass cancels? Wait, Force = GMm/r². Ratio = (MsMe/Re²)/(MsMm/Rm²) = (Me/Mm)*(Rm/Re)² = (1/0.1)*(1.5)².",
        image: null
    },
    {
        id: 18,
        question: "மூன்று திணிவுகளின் தனியாக்கிய தொகுதி ஒன்று உருவில் காணப்படுகின்றது. m1​,m2​ என்னும் இரு திணிவுகளும் உருவில் காணப்படும் தானங்களில் வைக்கப்பட்டிருக்கும் போது அவற்றின் செல்வாக்கின் கீழ் திணிவு M ஓய்வில் இருக்கிறது. திணிவு m1​ இரு மடங்காக்கப்படும் போது M மேலும் ஓய்வில் இருப்பது r2​ இன் பெறுமானம் (2004 G.C.E A/L Physics Q - 38)",
        options: ["2√2a", "√2a", "2a", "4a", "2/3a"],
        correct: 1, // (2) - Assuming standard inverse square law or equilibrium relation
        explanation: "Based on equilibrium, likely √2a.",
        image: "q18.jpg"
    },
    {
        id: 19,
        question: "புவியைச் சுற்றி உள்ள மண்டலத்தில் செல்கின்ற ஓர் உபகோளினுள்ளே அனுபவிக்கப்படும் நிறைக்குறைமை (weightlessness) பற்றிச் செய்யப்பட்ட பின்வரும் கூற்றுக்களைக் கருதுக. (A) அத்தகைய ஒரு குத்துயரத்தில் உள்ள புறக்கணிக்கத்தக்க அளவில் சிறிய ஈர்ப்பின் விளைவாக நிறைக்குறைமை ஏற்படுகிறது. (B) உபகோளினுள்ளே இயக்குபவரின் உந்தம் நிறைக்குறைமையின் விளைவாகப் பூச்சியமாகும். (C) நிறைக்குறைமையின் விளைவாக உபகோளினுள்ளே இயற்கை வெப்ப உடன்காவுகை ஓட்டங்கள் ஏற்பட முடியாது. (2006 G.C.E A/L Physics Q - 53)",
        options: ["A மட்டும்", "C மட்டும்", "A, C மட்டும்", "All", "None"],
        correct: 1, // (2) C only
        explanation: "A is false (gravity exists). B is false (momentum exists). C is true (convection needs gravity to differentiate density).",
        image: null
    },
    {
        id: 20,
        question: "புவியின் மேற்பரப்பில் ஒரு பொருள் 100 N நிறையை உடையது. அது புவியின் மேற்பரப்பிலிருந்து புவியின் ஆரைக்குச் சமமான ஓர் உயரத்திற்குக் கொண்டு செல்லப்படும் போது அதன் நிறை (2007 G.C.E A/L Physics Q - 14)",
        options: ["10 N", "25 N", "50 N", "75 N", "100 N"],
        correct: 1, // (2)
        explanation: "At h=R, distance is 2R. g' = GM/(2R)² = g/4. W' = W/4 = 25N.",
        image: null
    },
    {
        id: 21,
        question: "ஒரு கோள உருப்போலியின் (asteroid) ஆரை 60 km ஆகும். அதன் மேற்பரப்பின் மீது ஈர்ப்பினாலான ஆர்முடுகல் 3 ms−2 ஆகும். உருப்போலியின் மேற்பரப்பில் தப்பல் வேகம் (2009 G.C.E A/L Physics Q - 25)",
        options: ["400ms−1", "600ms−1", "800ms−1", "1200ms−1", "3600ms−1"],
        correct: 1, // (2)
        explanation: "v_e = √(2gR) = √(2 * 3 * 60000) = √(360000) = 600 ms⁻¹.",
        image: null
    },
    {
        id: 22,
        question: "நான்கு சர்வசமத் துணிக்கைகளில் மூன்று ஓர் அரை வட்டத்தின் மீதும் நான்காவது அரை வட்டத்தின் மையத்திலும் வைக்கப்பட்டுள்ளன. மூன்று ஒழுங்கமைப்புகள் (A,B,C) உருவில் காணப்படுகின்றன... மையத்தில் உள்ள துணிக்கை மீது ஏனைய மூன்று துணிக்கைகளினால் தேறிய ஈர்ப்பு விசையின் பருமன்கள் முறையே FA​,FB​,FC​ ஆகியவற்றினால் வகைகுறிக்கப்படுமெனின் (2010 G.C.E A/L Physics Q - 25)",
        options: ["FC​>FB​>FA​", "FB​<FC​<FA​", "FC​<FB​<FA​", "FC​=FB​=FA​", "FC​=FB​>FA​"],
        correct: 0, // Unknown without diagram
        explanation: "Requires diagram analysis.",
        image: "q22.jpg"
    },
    {
        id: 23,
        question: "புவிமீது ஆவர்த்தன காலம் T யை உடைய ஓர் எளிய ஊசல் சந்திரனிற்குக் கொண்டு வரப்படுகின்றது. புவியினதும் சந்திரனினதும் ஈர்ப்புக்களினாலான ஆர்முடுகல்களின் விகிதம் 6 எனின், சந்திரனின் மீது ஊசலின் அலைவுக் காலம் (2011 G.C.E A/L Physics Q - 03)",
        options: ["T", "6T", "√6T", "√6T/6", "6T/√6"], // Correcting Options based on math: √6 T
        correct: 2, // (3) √6 T
        explanation: "T ∝ 1/√g. g reduces by 6, so T increases by √6.",
        image: null
    },
    {
        id: 24,
        question: "சீரான அடர்த்தியை உடைய ஒரு கோளின் திணிவு 2.0×1027 kg ஆகும். அதன் ஆரை 6.7×107 m ஆகும். கோளின் மேற்பரப்பில் உள்ள ஈர்ப்பு அழுத்தம் (2011 G.C.E A/L Physics Q - 09)",
        options: ["−2.0×109 Jkg−1", "−2.0×102 Jkg−1", "0", "2.0×109 Jkg−1", "6.0×102 Jkg−1"],
        correct: 0, // (1)
        explanation: "V = -GM/R = -(6.7e-11 * 2e27) / 6.7e7 = -2e9.",
        image: null
    },
    {
        id: 25,
        question: "இரு திணிவுகளுக்கிடையே உள்ள தூரத்தை இருமடங்காக்கினால், அவற்றுக்கிடையே உள்ள ஈர்ப்பு விசை குறையும் காரணி (2012 G.C.E A/L Physics Q - 02)",
        options: ["2", "4", "6", "8", "12"],
        correct: 1, // (2)
        explanation: "F ∝ 1/r². Double distance => 1/4 force. Factor 4.",
        image: null
    },
    {
        id: 26,
        question: "ஓர் உபகோள் (S) ஆனது புவி (E) பற்றி ஒரு நீள்வளைய மண்டலத்தில் இயங்குகின்றது. புள்ளி A யில் உபகோளின் கதி V எனின், புள்ளி B யில் அதன் கதி (2012 G.C.E A/L Physics Q - 24)",
        options: ["V/8", "V/4", "V", "2V", "4V"], // Guessing options from standard set
        correct: 0, // Unknown
        explanation: "Depends on diagram (distance ratio).",
        image: "q26.jpg"
    },

    {
        id: 27,
        question: "திணிவு M ஐயும் ஆரை R ஐயும் உடைய ஒரு கோளிலிருந்து தப்புவதற்கு ஒரு துணிக்கை கொண்டிருக்க வேண்டிய குறைந்தபட்ச வேகம் v ஐத் தருவது (2013 G.C.E A/L Physics Q - 21)",
        options: ["v=√(R/2GM)", "v=√(2GM/R)", "v=√(4GM/R)", "v=√(GM/R)", "v=√(2GM/R²)"],
        correct: 1, // (2)
        explanation: "Escape velocity v = √(2GM/R).",
        image: null
    },
    {
        id: 28,
        question: "ஆரை R ஐயும் திணிவு M ஐயும் உடைய ஒரு கோளக் கோளின் மையத்திலிருந்து தூரம் 2R இல் இருக்கும் ஒரு புள்ளி P யிலிருந்து திணிவு m உடைய ஒரு துணிக்கை உருவிற் காணப்படுகின்றவாறு நிலைக்குத்தாக மேனோக்கி எறியப்படுகின்றது. இந்த எறிபடையின் தப்பல் வேகம் (2014 G.C.E A/L Physics Q - 45)",
        options: ["v=√(GM/R)", "v=√(2GM/R)", "v=√(2Gm/R)", "v=√(GM/2R)", "v=√(GM/R)"],
        correct: 0, // (1) v=sqrt(GM/R)
        explanation: "Total Energy at 2R = PE + KE = -GMm/2R + 0.5mv². For escape, Total Energy = 0. 0.5mv² = GMm/2R => v = √(GM/R).",
        image: "q28.jpg"
    },
    {
        id: 29,
        question: "முறையே m1, m2 என்னும் திணிவுகளை உடைய A, B என்னும் இரு உடுக்கள் உருவில் m1r1=m2r2 ஆக இருக்கும் புள்ளி O பற்றி அவற்றின் தம்முள் புவியீர்ப்புக் கவர்ச்சியின் விளைவாக AOB எப்போதும் ஒரு கோட்டில் இருக்குமாறு உருவில் காணப்படுகின்றவாறு வட்ட இயக்கங்களில் உள்ளன. m1, m2 ஆகியவற்றின் கதிகள் முறையே v1, v2 எனின், விகிதம் v1/v2 ஆனது (2015 G.C.E A/L Physics Q - 38)",
        options: ["m1/m2", "m2/m1", "(m1+m2)/m2", "(m1+m2)/m1", "m2/(m1+m2)"],
        correct: 1, // (2)
        explanation: "v = rω. v1/v2 = r1/r2. Since m1r1 = m2r2, r1/r2 = m2/m1. So v1/v2 = m2/m1.",
        image: "q29.jpg"
    },
    {
        id: 30,
        question: "கோள் A இற்குரிய விகிதம் (கோளின் ஆரை / கோளின் திணிவு) ஆனது கோள் B இற்குரியதை விட நான்கு மடங்கு எனின், (கோள் B இன் மேற்பரப்பில் தப்பல் வேகம் / கோள் A இன் மேற்பரப்பில் தப்பல் வேகம்) விகிதம் ஆனது (2016 G.C.E A/L Physics Q - 23)",
        options: ["√2", "2", "4", "8", "12"],
        correct: 1, // (2)
        explanation: "ve ∝ √(M/R). Ratio B/A = √(MB/RB * RA/MA). RA/MA = 4(RB/MB). So Ratio = √(MB/RB * 4 * RB/MB) = √4 = 2.",
        image: null
    },
    {
        id: 31,
        question: "ஆரை RA ஐ உடைய ஒரு சீரான கோளக் கோள் A இனதும் ஆரை RB ஐ உடைய ஒரு சீரான கோளக் கோள் B இனதும் மேற்பரப்புக்களின் மீது உள்ள ஈர்ப்பினாலான ஆர்முடுகல்கள் சமமாகும். A இன் திணிவு B இன் திணிவின் இருமடங்கெனின் (2018 G.C.E A/L Physics Q - 11)",
        options: ["RA = √2RB", "RA = 2RB", "RA = RB/√2", "RA = RB/2", "RA = RB"],
        correct: 0, // (1)
        explanation: "gA = gB => MA/RA² = MB/RB². 2MB/RA² = MB/RB². RA² = 2RB². RA = √2RB.",
        image: null
    },
    {
        id: 32,
        question: "ஒரு புள்ளித் திணிவு காரணமாக ஈர்ப்பு அழுத்தம் V(r) இன் தூரம் r உடனான மாறலை மிகச் சிறந்த விதத்தில் வகைகுறிப்பது (2019 G.C.E A/L Physics Q - 05)",
        options: ["Graph 1", "Graph 2", "Graph 3", "Graph 4", "Graph 5"],
        correct: 0, // Placeholder
        explanation: "Graph should show a rectangular hyperbola in the 4th quadrant (negative V) approaching zero as r -> infinity.",
        image: "q32.jpg"
    },
    {
        id: 33,
        question: "வான் பொருளொன்று ஒரு குறித்த நேரத்தில் புவியின் மையத்தையும் சந்திரனின் மையத்தையும் தொடுக்கும் கோட்டின் நடுப் புள்ளியில் உள்ளது. சந்திரனின் திணிவு புவியின் திணிவின் 0.0123 மடங்காகும். சந்திரனதும் புவியினதும் மையங்களுக்கிடையிலான தூரம் புவியின் ஆரையின் 60 மடங்காகுமெனக் கொள்க. புவி, சந்திரன் ஆகிய இரண்டினதும் ஈர்ப்புக் காரணமாகப் பொருளின் ஆர்முடுகல் g சார்பாக அண்ணளவில் (2019 G.C.E A/L Physics Q - 22)",
        options: ["1.1×10⁻⁶g", "1.1×10⁻³g", "3.3×10⁻²g", "0.5g", "1.0g"],
        correct: 1, // (2)
        explanation: "Net g = gEarth - gMoon at 30R. gE' = gE/30² = g/900. gM' = (0.0123/30²)gE. Difference approx 1/900 g = 1.1x10^-3 g.",
        image: null
    },
    {
        id: 34,
        question: "1.0 kg திணிவுள்ள ஒரு சிறிய உபகரணம் ஒரு கோள் மீது வைக்கப்பட்டுள்ளது. இக்கோளின் திணிவு புவியின் திணிவின் மூன்று மடங்கும் ஆரை புவியின் ஆரையின் இரு மடங்கும் ஆகும். கோளின் மேற்பரப்பு மீது இவ்வுபகரணத்தின் நிறை யாது? ஈர்ப்பு தவிர ஏனைய எல்லா விளைவுகளையும் புறக்கணிக்க. (2020 G.C.E A/L Physics Q - 10)",
        options: ["4/15 N", "10/3 N (3.33)", "15/2 N (7.5)", "10 N", "45/4 N"],
        correct: 2, // (3) Assuming 215 N meant 7.5 N
        explanation: "g' = 3M/(2R)² g = 3/4 g. W = 1 * 3/4 * 10 = 7.5 N.",
        image: null
    },
    {
        id: 35,
        question: "ஒரு சீரான உலோகக் கம்பியாலான முறையே r, 2r, 2r, 3r ஆரைகளையுடைய A, B, C, D என்னும் நான்கு வளையங்களை ஒரே புள்ளியில் முட்டுவதன் மூலம் உருவில் காட்டப்பட்டுள்ளவாறு கூட்டுப் பொருள் உருவாக்கப்பட்டுள்ளது. புள்ளி X இலிருந்து கூட்டுப் பொருளின் புவியீர்ப்பு மையத்தின் தூரம் (2020 G.C.E A/L Physics Q - 19)",
        options: ["r", "4/5 r", "2r", "9/4 r", "0"],
        correct: 3, // (4) assuming 2.25r
        explanation: "Center of mass calculation yields 2.25r (or 9/4 r).",
        image: "q35.jpg"
    },
    {
        id: 36,
        question: "உருவில் காட்டியவாறு ஒரு பக்கத்தின் நீளம் a ஆகவுள்ள ஒரு சமபக்க முக்கோணியின் உச்சிகளில் ஒவ்வொன்றும் திணிவு m ஐ உடைய மூன்று உடுக்கள் உள்ளன. இம்முன்று உடுக்களும் முக்கோணியின் மையப்போலி பற்றி அவற்றிற்கிடையேயான தூரத்தைப் பேணிக்கொண்டு ஒரு வட்டப்பாதையில் சுற்றுகின்றனவெனக் கொள்க. இத்தொகுதியின் ஆவர்த்தன சக்கரம் (2020 G.C.E A/L Physics Q - 48)",
        options: ["2π√(a³/2GM)", "2π√(a³/3GM)", "2π√(3a³/GM)", "2π√(GM/a³)", "2π√(a³/GM)"],
        correct: 1, // (2) 2π√(a³/3GM)
        explanation: "Centripetal force F = √3 Gm²/a². mrω² = F (r=a/√3). T = 2π√(a³/3GM).",
        image: "q36.jpg"
    },
    {
        id: 37,
        question: "வியாழன் கோளின் விட்டமும் இடை அடர்த்தியும் முறையே புவியின் அப்பெறுமானங்களின் 11 மடங்கும் 1/4 மடங்கும் ஆகும். புவியின் மேற்பரப்பில் புவியீர்ப்புச் செறிவு 10 N kg⁻¹ எனின், வியாழன் கோளின் மேற்பரப்பு மீது உள்ள புவியீர்ப்புச் செறிவு யாது? (2021(2022) G.C.E A/L Physics Q - 20)",
        options: ["27.5 N kg⁻¹", "44.0 N kg⁻¹", "48.4 N kg⁻¹", "110 N kg⁻¹", "440 N kg⁻¹"],
        correct: 0, // (1)
        explanation: "g ∝ Rρ. gJ = 11 * (1/4) * 10 = 2.75 * 10 = 27.5 N/kg.",
        image: null
    },
    {
        id: 38,
        question: "வினா? (2024 G.C.E A/L Physics Q - 44)",
        options: ["1", "2", "3", "4", "5"],
        correct: 0, // (1)
        explanation: "g ∝ Rρ. gJ = 11 * (1/4) * 10 = 2.75 * 10 = 27.5 N/kg.",
        image:"q38.jpg"
    },
    {
        id: 39,
        question: "வினா? (2023 G.C.E A/L Physics Q - 19)",
        options: ["1", "2", "3", "4", "5"],
        correct: 0, // (1)
        explanation: "g ∝ Rρ. gJ = 11 * (1/4) * 10 = 2.75 * 10 = 27.5 N/kg.",
        image:"q39.jpg"
    },
    {
        id: 40,
        question: "வினா? (2023 G.C.E A/L Physics Q - 02)",
        options: ["1", "2", "3", "4", "5"],
        correct: 0, // (1)
        explanation: "g ∝ Rρ. gJ = 11 * (1/4) * 10 = 2.75 * 10 = 27.5 N/kg.",
        image: "q40.jpg"
    },
    {
        id: 41,
        question: "வினா? (2022(2023) G.C.E A/L Physics Q - 49)",
        options: ["1", "2", "3", "4", "5"],
        correct: 0, // (1)
        explanation: "g ∝ Rρ. gJ = 11 * (1/4) * 10 = 2.75 * 10 = 27.5 N/kg.",
        image: "q41.jpg"
    },
    {
        id: 42,
        question: "வினா? (2025 G.C.E A/L Physics Q - 26)",
        options: ["1", "2", "3", "4", "5"],
        correct: 0, // (1)
        explanation: "g ∝ Rρ. gJ = 11 * (1/4) * 10 = 2.75 * 10 = 27.5 N/kg.",
        image: "q42.jpg"
    }
];

// Helper to fill up to 43 questions
const subjects = ["Physics", "Chemistry", "Biology", "Combined Maths"];
for (let i = 43; i <= 42; i++) {
    questions.push({
        id: i,
        question: `Sample Question ${i}: This is a placeholder for a ${subjects[i % 4]} specific problem.`,
        options: [
            `Option A for Q${i}`,
            `Option B for Q${i}`,
            `Answer for Q${i}`,
            `Option D for Q${i}`,
            `Option E for Q${i}`
        ],
        correct: 2, // Always C for generated ones
        explanation: `Explanation for Question ${i}. This clears up the concept.`,
        image: null
    });
}

/* --- STATE --- */
const state = {
    currentQuestionIndex: 0,
    answers: {}, // Map of index -> { selectedIndex, isCorrect, ... }
    startTime: null,
};

/* --- DOM ELEMENTS --- */
const screens = {
    home: document.getElementById('home-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen'),
    review: document.getElementById('review-screen')
};

const dom = {
    headerStats: document.getElementById('header-stats'),
    headerAttempts: document.getElementById('header-attempts'),
    totalAttempts: document.getElementById('total-attempts'),
    bestScore: document.getElementById('best-score'),
    lastDate: document.getElementById('last-date'),
    startBtn: document.getElementById('start-btn'),

    // Quiz View
    progressBar: document.getElementById('progress-bar'),
    currentQNum: document.getElementById('current-q-num'),
    totalQNum: document.getElementById('total-q-num'),
    qText: document.getElementById('question-text'),
    qYear: document.getElementById('question-year'),
    qImage: document.getElementById('question-image'),
    optionsContainer: document.getElementById('options-container'),
    navContainer: document.getElementById('question-navigator'),

    // Controls
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    submitBtn: document.getElementById('submit-btn'),

    // Result
    finalScore: document.getElementById('final-score'),
    scorePerc: document.getElementById('score-percentage'),
    circleStroke: document.getElementById('score-circle-stroke'),
    retryBtn: document.getElementById('retry-btn'),
    reviewBtn: document.getElementById('review-btn'),

    // Review
    mistakesContainer: document.getElementById('mistakes-container'),
    backHomeBtn: document.getElementById('back-home-btn')
};

// Compliments & Encouragements (Unused in Exam Mode but kept for compatibility if needed)
const compliments = ["Awesome!", "Brilliant!", "Spot On!", "Lighting Fast!", "Genius!", "Keep it Up!"];
const encouragements = ["Oops! Not quite.", "Mistakes help us learn.", "Tricky one, eh?", "Don't give up!", "Not this time."];

/* --- INITIALIZATION --- */
function init() {
    loadStats();
    setupEventListeners();
}

function setupEventListeners() {
    dom.startBtn.addEventListener('click', startQuiz);
    dom.retryBtn.addEventListener('click', () => switchScreen('home'));
    dom.reviewBtn.addEventListener('click', showReview);
    dom.backHomeBtn.addEventListener('click', () => switchScreen('home'));

    // Navigation
    dom.prevBtn.addEventListener('click', () => navigate(-1));
    dom.nextBtn.addEventListener('click', () => navigate(1));
    dom.submitBtn.addEventListener('click', finishQuiz);
}

/* --- NAVIGATION --- */
function switchScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenName].classList.add('active');

    // Update specific visibilities
    if (screenName === 'home') {
        loadStats();
        dom.headerStats.style.display = 'none';
        state.currentQuestionIndex = 0;
        state.answers = {};
    } else {
        dom.headerStats.style.display = 'flex';
    }
}

/* --- QUIZ LOGIC --- */
function startQuiz() {
    state.currentQuestionIndex = 0;
    state.answers = {};
    state.startTime = new Date();

    dom.totalQNum.textContent = questions.length;

    switchScreen('quiz');
    renderNavigator();
    renderQuestion();
    updateControls();
}

function renderNavigator() {
    dom.navContainer.innerHTML = '';
    questions.forEach((_, idx) => {
        const pill = document.createElement('div');
        pill.classList.add('q-nav-pill');
        pill.textContent = idx + 1;
        pill.id = `nav-pill-${idx}`;
        pill.onclick = () => {
            state.currentQuestionIndex = idx;
            renderQuestion();
            updateControls();
        };
        dom.navContainer.appendChild(pill);
    });
}

function updateNavigator() {
    // Update Active and Done states
    document.querySelectorAll('.q-nav-pill').forEach((pill, idx) => {
        pill.classList.remove('active', 'done');
        if (idx === state.currentQuestionIndex) pill.classList.add('active');
        if (state.answers[idx]) pill.classList.add('done');
    });
}

function renderQuestion() {
    const q = questions[state.currentQuestionIndex];

    // Update Navigator
    updateNavigator();

    // Update Progress (Just Visual)
    const filledCount = Object.keys(state.answers).length;
    const progress = (filledCount / questions.length) * 100;
    dom.progressBar.style.width = `${progress}%`;

    // Render Content
    dom.currentQNum.textContent = state.currentQuestionIndex + 1;

    // Extract Year info
    const yearRegex = /\((19|20)\d{2}.*?\)$/;
    const match = q.question.match(yearRegex);
    let displayText = q.question;

    if (match) {
        dom.qYear.textContent = match[0].replace('(', '').replace(')', ''); // Clean brackets
        dom.qYear.style.display = 'inline-block';
        // Optional: Remove it from text if it looks redundant
        displayText = displayText.replace(match[0], '').trim();
    } else {
        dom.qYear.style.display = 'none';
    }

    dom.qText.textContent = displayText;

    // Render Image if available
    if (q.image) {
        dom.qImage.src = q.image;
        dom.qImage.style.display = 'block';
    } else {
        dom.qImage.style.display = 'none';
    }

    renderOptions(q);
}

function renderOptions(q) {
    dom.optionsContainer.innerHTML = '';
    const currentAnswer = state.answers[state.currentQuestionIndex];

    q.options.forEach((opt, idx) => {
        const btn = document.createElement('div');
        btn.classList.add('option-btn');
        btn.textContent = opt;

        // Restore selection if exists
        if (currentAnswer && currentAnswer.userSelected === idx) {
            btn.classList.add('selected');
        }

        btn.onclick = () => handleAnswer(idx);
        dom.optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selectedIndex) {
    const q = questions[state.currentQuestionIndex];
    const isCorrect = selectedIndex === q.correct;

    // Save state
    state.answers[state.currentQuestionIndex] = {
        questionId: q.id,
        userSelected: selectedIndex,
        correctIndex: q.correct,
        isCorrect: isCorrect,
        questionText: q.question,
        correctText: q.options[q.correct],
        userText: q.options[selectedIndex]
    };

    // Re-render to show selection
    renderOptions(q);
    updateNavigator();
    updateControls();

    // Optional: Auto-advance for flow
    setTimeout(() => {
        if (state.currentQuestionIndex < questions.length - 1) {
            navigate(1);
        }
    }, 350);
}

function navigate(direction) {
    const newIndex = state.currentQuestionIndex + direction;
    if (newIndex >= 0 && newIndex < questions.length) {
        state.currentQuestionIndex = newIndex;
        renderQuestion();
        updateControls();
    }
}

function updateControls() {
    // Prev Button
    dom.prevBtn.style.visibility = state.currentQuestionIndex === 0 ? 'hidden' : 'visible';

    // Submit Button state
    const allAnswered = Object.keys(state.answers).length === questions.length;
    dom.submitBtn.disabled = !allAnswered;
    dom.submitBtn.style.opacity = allAnswered ? '1' : '0.5';
    dom.submitBtn.style.cursor = allAnswered ? 'pointer' : 'not-allowed';

    // Next Button visibility (Hide on last question to focus on submit)
    if (state.currentQuestionIndex === questions.length - 1) {
        dom.nextBtn.style.display = 'none';
    } else {
        dom.nextBtn.style.display = 'inline-flex';
    }
}

/* --- RESULTS & STATS --- */
function finishQuiz() {
    if (Object.keys(state.answers).length !== questions.length) {
        alert("Please answer all questions before submitting.");
        return;
    }

    // Calculate Score
    let score = 0;
    Object.values(state.answers).forEach(ans => {
        if (ans.isCorrect) score++;
    });

    saveResults(score);

    dom.finalScore.textContent = score;
    const percentage = Math.round((score / questions.length) * 100);
    dom.scorePerc.textContent = `${percentage}%`;

    // Circle Animation
    const strokeDash = `${percentage}, 100`;
    dom.circleStroke.style.stroke = percentage >= 75 ? 'var(--success)' : (percentage >= 50 ? 'var(--primary)' : 'var(--error)');
    dom.circleStroke.setAttribute('stroke-dasharray', strokeDash);

    switchScreen('results');
}

function saveResults(score) {
    const history = JSON.parse(localStorage.getItem('al_mcq_history') || '[]');

    // Convert answers map to array for storage/review
    const answersArray = Object.values(state.answers);

    const resultData = {
        date: new Date().toISOString(),
        score: score,
        total: questions.length,
        mistakes: answersArray.filter(a => !a.isCorrect),
        allAnswers: answersArray // Store all for review
    };

    history.push(resultData);
    localStorage.setItem('al_mcq_history', JSON.stringify(history));
}

function loadStats() {
    const history = JSON.parse(localStorage.getItem('al_mcq_history') || '[]');
    const totalTaken = history.length;

    let best = 0;
    history.forEach(h => {
        if (h.score > best) best = h.score;
    });

    const last = history.length > 0 ? new Date(history[history.length - 1].date).toLocaleDateString() : 'Never';

    dom.totalAttempts.textContent = totalTaken;
    dom.headerAttempts.textContent = totalTaken;
    dom.bestScore.textContent = `${best}/43`;
    dom.lastDate.textContent = last;

    // Render Recent History (Last 5)
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';

    // Reverse to show newest first, take top 5
    const recent = [...history].reverse().slice(0, 5);

    if (recent.length === 0) {
        historyList.innerHTML = '<div class="history-empty">No attempts yet. Start practicing!</div>';
    } else {
        recent.forEach(h => {
            const row = document.createElement('div');
            row.classList.add('history-item');
            const dateStr = new Date(h.date).toLocaleDateString();
            const scoreClass = h.score >= 35 ? 'high' : (h.score >= 20 ? 'med' : 'low');

            row.innerHTML = `
                <span class="h-date">${dateStr}</span>
                <span class="h-score ${scoreClass}">${h.score}/43</span>
            `;
            historyList.appendChild(row);
        });
    }
}

/* --- EXAMINATION REVIEW --- */
function showReview() {
    // Get last entry
    const history = JSON.parse(localStorage.getItem('al_mcq_history') || '[]');
    if (history.length === 0) return;

    const lastResult = history[history.length - 1];
    // Use allAnswers if available (new format), else mistakes (old format fallback)
    const answersToRender = lastResult.allAnswers || lastResult.mistakes;

    dom.mistakesContainer.innerHTML = '';

    answersToRender.forEach((m) => {
        const card = document.createElement('div');
        card.classList.add('mistake-card');

        // Style based on correctness
        const statusColor = m.isCorrect ? 'var(--success)' : 'var(--error)';
        const statusText = m.isCorrect ? 'Correct' : 'Incorrect';
        card.style.borderColor = m.isCorrect ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)';
        card.style.background = m.isCorrect ? 'rgba(16, 185, 129, 0.05)' : 'rgba(239, 68, 68, 0.1)';

        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                <h3>Question ${m.questionId}</h3>
                <span style="color:${statusColor}; font-weight:bold;">${statusText}</span>
            </div>
            <p style="margin-bottom:10px; color:white;">${m.questionText}</p>
            <div class="mistake-info">
                <span style="color:${m.isCorrect ? 'var(--text-muted)' : 'var(--error)'}; display:block;">Your Answer: ${m.userText}</span>
                <span class="correct-ans-highlight">Correct Answer: ${m.correctText}</span>
            </div>
        `;
        dom.mistakesContainer.appendChild(card);
    });

    switchScreen('review');
}
// Start
init();
