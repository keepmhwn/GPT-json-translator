export interface OpenAIError {
  status: 401 | 403 | 429 | 500 | 503;
  error: {
    message: string;
  };
}

export interface NextResponseError {
  code: number;
  message: string;
}
