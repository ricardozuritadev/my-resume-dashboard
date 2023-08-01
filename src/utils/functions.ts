export const handleDownloadResume = (url: string) => {
  const fileName = url.split("/").pop();
  const aTag = document.createElement("a");
  aTag.href = url;
  aTag.target = "_blank";
  aTag.setAttribute("download", fileName || "cv_ricardozurita_es.pdf");
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
};
