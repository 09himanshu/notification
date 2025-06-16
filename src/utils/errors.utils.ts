class AppError extends Error {
    constructor(
        public statusCode: number,
        public message: string,
        public isOperational = true
    ) {
        super(message);
        Object.setPrototypeOf(this, AppError.prototype);
    }
}

class BADREQUEST extends AppError {
    constructor(message: string) {
        super(400, message)
    }
}

class AUTHENTICATION extends AppError {
    constructor(message: string) {
        super(401, message)
    }
}

class FORBIDDEN extends AppError {
    constructor(message: string) {
        super(403, message)
    }
}

class NOTFOUND extends AppError {
    constructor(message: string) {
        super(404, message)
    }
}

class INTERNALSERVER extends AppError {
    constructor(message: string) {
        super(500, message)
    }
}

class GATEWAYTIMEOUT extends AppError {
    constructor(message: string) {
        super(502, message)
    }
}

export {
    AppError,
    BADREQUEST,
    AUTHENTICATION,
    FORBIDDEN,
    NOTFOUND,
    INTERNALSERVER,
    GATEWAYTIMEOUT
}