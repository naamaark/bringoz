type task = {
    id: string;
    location: { lat: number, lng: number };
}

export interface user {
    name: string;
    phone: string;
    email: string;
    location: { lat: number, lng: number };
    tasks: Array<task>;
}