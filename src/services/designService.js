const baseUrl = "http://localhost:3030";

export async function getOneDesign() {
  let response = await fetch(`${baseUrl}/design`);

  let result = await response.json();
  return result;
}

export async function getAllDesigns(designId) {
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

export async function Del(designId, token) {
  let response = await fetch(`${baseUrl}/pets/${designId}`, {
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
