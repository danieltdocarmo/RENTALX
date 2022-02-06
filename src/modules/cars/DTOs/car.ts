interface IDTOCar{

    id?: string;
    name: string;
    description: string;
    daily_rate: number;
    available?: boolean;
    license_plate: string;
    fine_amount: number;
    brand: string;
    created_at?: Date;
    category_id?: string;

} 

interface IDTOCarFilter {
    category_id?: string;
    brand?: string;
    name?: string;
}

export {IDTOCar, IDTOCarFilter};