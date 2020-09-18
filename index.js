const loadSvg = async () =>
  await d3.xml("tshirt.svg").then((data) => {
    d3.select("#svg-container").node().append(data.documentElement);
  });
let data = {};
async function load() {
  const data = await d3.xml("tshirt.svg");
  console.log(d3.xml("final_tshirt.svg"));
  d3.select("#svg-container1").node().append(data.documentElement);
}
load();
loadSvg();
let groups = {};
console.log(groups);
$("#red").on("click", function () {
  groups = $("#svg-container1 svg").find("g");
  console.log($("#tshirt_color"));
  //   $("#tshirt_color").css("fill", "red");
  //   $("#tshirt_shade path").css("fill", "blue");
  $.each(groups, function (index, group) {
    console.log($(group).attr("id"));
    let label = document.createElement("label");
    label.innerHTML = $(group).data("name");
    let input = document.createElement("div");
    input.setAttribute("id", $(group).attr("id"));
    $(".color-palatter").append(label);
    $(".color-palatter").append(input);
  });

  console.log(groups);

  $.each(groups, function (index, group) {
    // Simple example, see optional options for more configuration.
    const pickr = Pickr.create({
      el: "div#" + $(group).attr("id"),
      theme: "classic", // or 'monolith', or 'nano'

      swatches: [
        "rgba(244, 67, 54, 1)",
        "rgba(233, 30, 99, 0.95)",
        "rgba(156, 39, 176, 0.9)",
        "rgba(103, 58, 183, 0.85)",
        "rgba(63, 81, 181, 0.8)",
        "rgba(33, 150, 243, 0.75)",
        "rgba(3, 169, 244, 0.7)",
        "rgba(0, 188, 212, 0.7)",
        "rgba(0, 150, 136, 0.75)",
        "rgba(76, 175, 80, 0.8)",
        "rgba(139, 195, 74, 0.85)",
        "rgba(205, 220, 57, 0.9)",
        "rgba(255, 235, 59, 0.95)",
        "rgba(255, 193, 7, 1)",
      ],

      components: {
        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
          hex: true,
          rgba: true,
          hsla: true,
          hsva: true,
          cmyk: true,
          input: true,
          clear: true,
          save: true,
        },
      },
    });
    pickr.on("change", function (color, instance) {
      const svg_element = $("svg #" + $(group).attr("id"))[0];
      console.log(svg_element);
      $(svg_element).css("fill", color.toHEXA().toString());
      //   $("svg#" + $(group).attr("id"))[0].css("fill", color.toHEXA().toString());
    });
  });
});
