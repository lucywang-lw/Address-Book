export interface Contact {
    name: {
        title: string;
        first: string;
        last: string;
    };
    phone: string;
    cell: string;
    email: string;
    gender: string;
    location: {
        city: string;
        country: string;
        state: string;
        timezone: {
            offset: string;
            description: string;
        }
    };
    picture: {
        thumbnail: string;
        large: string;
        medium: string;
    };
    id: {
        value: string;
        name: string;
    };
    dob: {
        age: number;
        date: string;
    };
    nat: string;
}