export interface RegistrationDto {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;

  acceptTermsAndConditions: boolean;
}
