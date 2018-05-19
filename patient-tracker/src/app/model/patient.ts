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
        typeOfEmergency?:string;
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
        medications?: string;
        pastHistory?: string;
        allergies?: string;
        bp?: [
            {
                systolic: number,
                diastolic: number,
                time: Date
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
                breathsPerMinute?: number;
                time: Date;
                o2Saturation: number;
            }
        ];
        locAVPU?: string;
        glasgowComaScale?: {
            eyesOpen: number;
            bestVerbal: number;
            bestMotor: number;
        };
        alsAirway?: [
            {
                attempts: number;
                success: string;
                tubeSize: string;
                other: string;
            }
        ];
        alsIVIOAccess?: [
            {
                attempts: number;
                success: string;
                site: string;
                gauge: number;
                other: string;
                glucometerCheck: string;
            }
        ];
        alsMedications?: [
            {
                drug: string;
                dose: string;
                route: string;
                other: string;
            }
        ];
        treatmentNarrative?: string;
    }


}

export const AVPU = [
    {
        text: "Alert"
    },
    {
        text: "Verbal"
    },
    {
        text: "Painful"
    },
    {
        text: "Unresponsive"
    }
]

export const EyesOpen = [
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
        number: 3,
        text: "Inappropriate - 3"
    },
    {
        number: 2,
        text: "Garbled - 2"
    },
    {
        number: 1,
        text: "None - 1"
    }
]

export const BestMotor = [
    {
        number: 6,
        text: "Obeys commands - 6"
    },
    {
        number: 5,
        text: "Pain/Local - 5"
    },
    {
        number: 4,
        text: "Pain/Withdrawal - 4"
    },
    {
        number: 3,
        text: "Pain/Flexion - 3"
    },
    {
        number: 2,
        text: "Pain/Extension - 2"
    },
    {
        number: 1,
        text: "None - 1"
    }
]

export const MedicalFieldImpression = [
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

export const TraumaFieldImpression = [
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
