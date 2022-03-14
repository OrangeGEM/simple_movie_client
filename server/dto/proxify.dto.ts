export class ProxifyDto {
    readonly data: {
        username?: string;
        password?: string;
        grant_type?: string;
    
        id?: string;
        message: string;
    };
    readonly options: {
        token?: string;
        api_url: string;
        method: any;
    };
}