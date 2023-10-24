export function validateString(value: unknown, maxLength: number): value is string {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
}

export function getErrorMessage(error: unknown) {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error == "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    console.log(error);
    message = "Unkown Error, please have a look into the console.";
  }
  return message;
}
