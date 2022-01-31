interface IDTOCar{

    id?: string;
    name: string;
    description: string;
    daily_rate: number;
    available?: boolean;
    license_plate: string;
    brand_id?: string;
    fine_amount: number;
    brand: string;
    created_at?: Date;

} export {IDTOCar};