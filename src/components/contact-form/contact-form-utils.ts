import { publicClient } from "@/graphql";

export type ContactFormInput = {
  data: Record<string, string>;
  email: string;
  name: string;
  profileId?: string;
  tenantId: string;
  turnstileToken: string;
};

type SubmitContactFormMutationVariables = { args: ContactFormInput };
type SubmitContactFormMutationResponse = {
  submitContactForm: { success: boolean };
};

export const submitContactForm = async (args: ContactFormInput) => {
  const mutation = `
  mutation submitContactForm($args: ContactFormInput!) {
    submitContactForm(args: $args) {
      success
    }
  }
  `;
  return publicClient().request<
    SubmitContactFormMutationResponse,
    SubmitContactFormMutationVariables
  >(mutation, { args });
};
