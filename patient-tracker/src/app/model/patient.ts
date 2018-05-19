export class Patient {
    id?: string;
    witness?: {
        firstname?: string;
        lastname?: string;
        age?: number;
        sex?: string;
        location?: string;
        description?: string;
        time?: Date;
        mechanismOfInjury?: string[];
        bodyPartsAffected?: string;
        symptomDescription?: string;
        sensationMovesOrRadiates?: string;
        howLongSymptomsLasted?: string;
        treatmentSoFar?: string;
        photoUrls?: string[];
        areEyeOpen?: boolean;
        reactToVoice?: boolean;
        reactToPain?: boolean;
        bleeding?: boolean;
        havePulse?: boolean;
        language?: string;
        preExistingIllnesses?: string;
        medications?: string;
        allergies?: {
            food?: string;
            antibiotics?: string;
            environmental?: string;
        };
        hospitalizedRecently?: boolean;
        hadSurgery?: boolean;
    };
    ems?: {
        tech1Name?: string;
        tech2Name?: string;
        shiftDate?: Date;
        chiefComplaint?: string;
        primaryFieldImpressions?: string[];
        secondaryFieldImpressions?: string[];
        primaryTrauma?: string[];
        secondaryTrauma?: string[];
        mechanismOfInjury?: string[];
        medication?: string;
        allergies?: string;
        bp?: [
            {
                systolic: number;
                diastolic: number;
                time: Date;
            }
        ];
        pulse?: [
            {
                beatsPerMinute: number;
                time: Date;
            }
        ];
        respiratory?: [
            {
                breathsPerMinute?:number;
                time: Date;
                o2Saturation: number;
            }
        ];
        glasgowComaScale?: {
            eyesOpen: number
        }
    }
    
        
}

export const EyeOpen = [
    {
        number: 4,
        text: "Spontaneous - 4"
    },
    {
        number: 3,
        text: "To Voice - 3"
    },
    {
        number: 2,
        text: "To Pain - 2"
    },
    {
        number: 1,
        text: "None - 1"
    }
];

export const BestVerbal = [
    {
        number: 5,
        text: "Oriented - 5"
    },
    {
        number: 4,
        text: "Confused - 4"
    },
    {
        
    }
]

export const FieldImpressions = [
    "Abdominal/GI",
    "Respiratory",
    "Cardiac",
    "CVA/TIA",
    "Diabetic",
    "DOA - No CPR",
    "OB - Birth/Delivery",
    "Gyn",
    "OB - Labor",
    "Pregnancy Prolems",
    "OD - Poison",
    "Psychiatric",
    "Seizure",
    "Sepsis/Infection",
    "Other Medical",
    "Other Neuro"
];

export const Trauma = [
    "Abdomen",
    "Chest",
    "Extremities",
    "Musculoskeletal",
    "Head/Face",
    "Neck-Back",
    "Pelvic",
    "Multi-systems"
];

export const EmsMechanismOfInjury = [
    "None",
    "Auto-Pedestrian",
    "Motorcycle",
    "Penetrating injury - Gunshot",
    "Penetrating injury - Knife",
    "Blunt injury",
    "Fall/Jump",
    "Driver - MVA",
    "Passenger - MVA",
    "Airbag",
    "Seatbelt",
    "Steering wheel deformed",
    "Dashboard deformed",
    "Windshield spiderwebbed",
    "Ejection",
    "Entrapment",
    "Pinned in vehicle",
    "DOA Same Vehicle",
    "Rollover",
    "Other",
];

export const WitnessMechanismOfInjury = [
    "Pregnancy",
    "Gunshot",
    "Penetrations of Head/Chest/Abdomen",
    "Fractures",
    "Hanging",
    "Drowning/Suffocation",
    "Amputation",
    "Ejection from Vehicle",
    "Death of vehicle passenger",
    "Fall over 20 feet",
    "Roll over of vehicle",
    "High speed vehicle crash",
    "Vehicle/Pedestrian crash",
    "Motorcycle crash",
    "Unresponsive or altered mental status",
    "Hidden Injuries",
    "Other"
];