const baseUrl = "http://localhost:3030/jsonstore";

export async function getAllDesigns() {
  let response = await fetch(`${baseUrl}/design`);

  let result = await response.json();

  if (response.ok) {
    return Object.values(result);
  } else {
    throw result;
  }
}

export async function getOneDesign(designId) {
  let response = await fetch(`${baseUrl}/design/${designId}`);

  let result = await response.json();
  return result;
}

export async function CreateDesign(designData, token) {
  let response = await fetch(`${baseUrl}/design`, {
    method: "POST",
    headers: {
      "content-type": "application-json",
      "X-Authorization": token,
    },
    body: JSON.stringify({ ...designData, likes: [] }),
  });

  let result = await response.json();
  return result;
}

export async function UpdateDesign(designId, designData, token) {
  let response = await fetch(`${baseUrl}/design/${designId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify(designData),
  });
  let result = await response.json();
  return result;
}

export async function DelDesign(designId, token) {
  let response = await fetch(`${baseUrl}/design/${designId}`, {
    method: "DELETE",
    headers: {
      "X-Authorization": token,
    },
  });

  let result = await response.json();
  return result;
}

export async function Like(designId, design, token) {
  let response = await fetch(`${baseUrl}/design/${designId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify(design),
  });

  let result = await response.json();
  return result;
}
