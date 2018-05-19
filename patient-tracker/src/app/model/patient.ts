export interface Patient {
    id?: string;
    witness: {
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
    ems: {
        tech1Name?: string;
        tech2Name?: string;
        shiftDate?: Date;
        emergencyType: string;
    }
    
        
}

export const 

export const MechanismOfInjury = [
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