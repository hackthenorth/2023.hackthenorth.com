import axios from "axios";

import { FormFields } from "../constants";

const ENDPOINT = "https://staging-api.hackthenorth.com/v3/proxy";
const BASE_REPO_ENDPOINT = "https://api.github.com/repos/hackathon";

const SUCCESS_CODE = 201;

export interface SubmitIssueParams
  extends Omit<FormFields, "userDescription" | "attachments" | "reporter"> {
  repoName: string;
  description: string;
  token: string;
}

/**
 * Submits an issue to hackathon/<repoName> in GitHub
 * @param params.repoName the name of the Github repository to submit the issue to (ex. team.hackthenorth.com, my.hackthenorth.com)
 * @param params.title the title of the issue
 * @param params.description a summary of the issue
 * @param params.reporter whoever reported the issue
 * @param params.priority the priority of the issue (from `Highest` to `Lowest`)
 * @returns whether or not issue submission was successful
 */
export const submitIssue = async ({
  repoName,
  title,
  description,
  priority,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  token, // TODO: used for hackerapi auth
}: SubmitIssueParams): Promise<boolean> => {
  const endpoint = `${ENDPOINT}?url=${BASE_REPO_ENDPOINT}/${repoName}/issues`;

  // send the request
  const res = await axios.post(
    endpoint,
    {
      title: title,
      body: description,
      labels: [priority],
    },
    {
      headers: {
        Authorization: `Basic [[GITHUB_CREDS]]`,
      },
    }
  );

  return res.status === SUCCESS_CODE;
};
