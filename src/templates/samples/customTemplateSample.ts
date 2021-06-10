import { v2 } from "@govtechsg/open-attestation";

export interface CocTemplateCertificate extends v2.OpenAttestationDocument {
  name: string;
  recipient: {
    name: string;
  };
}

export const cocTemplateCertificate: CocTemplateCertificate = {
  name: "OpenAttestation Certificate of Completion",
  issuers: [
    {
      name: "My name",
      documentStore: "0x92D3768de32024c3d3674bC01657F9d94197A2cF",
      identityProof: {
        location: "hungry-bronze-horse.sandbox.openattestation.com",
        type: v2.IdentityProofType.DNSTxt
      }
    }
  ],
  recipient: {
    name: "Gary Lim"
  },
  $template: {
    name: "COC",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "https://determined-elion-72a0a5.netlify.app/"
  }
};
