// For Mobile Sidebar
const menuBtns = document.querySelector(".menuBtns")
const menuopen = document.querySelector(".menuopen")
const menuclose = document.querySelector(".menuclose")
const sidemenu = document.querySelector(".sidemenu")

function openMenu() {
  if (menuopen.classList.contains("hidden")) {
    menuopen.classList.remove("hidden")
    menuclose.classList.add("hidden")
    sidemenu.classList.add("hidden")
    document.body.classList.remove("overflow-hidden")
  } else {
    menuopen.classList.add("hidden")
    menuclose.classList.remove("hidden")
    sidemenu.classList.remove("hidden")
    document.body.classList.add("overflow-hidden")
  }
}

menuBtns.addEventListener("click", openMenu)

sidemenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuopen.classList.remove("hidden")
    menuclose.classList.add("hidden")
    sidemenu.classList.add("hidden")
    document.body.classList.remove("overflow-hidden")
  })
})

// For Side Bar Active Links
function trackActiveSection(options) {
  const {
    activeClassName,
    contentElement,
    menuElement,
    scrollMarginTopOffset,
    topBarElement,
  } = options

  // Get all sections with class section
  function getIdElements() {
    return Array.prototype.slice.call(
      contentElement.querySelectorAll(".section")
    )
  }

  // Calculate bottom padding to avoid clipping
  function adjustBottomPadding() {
    const idElements = getIdElements()
    const lastElement = idElements[idElements.length - 1]
    const bottomSpacing =
      window.innerHeight -
      (topBarElement.offsetHeight + scrollMarginTopOffset) -
      (contentElement.offsetHeight - lastElement.offsetTop)
    if (bottomSpacing < 0) {
      contentElement.removeAttribute("style")
    } else {
      contentElement.style.paddingBottom = `${bottomSpacing}px`
    }
  }

  // Initialize bottom padding on load
  // adjustBottomPadding()

  // Listen for window resize to adjust bottom padding
  let resizeTimeout
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(adjustBottomPadding, 200)
  })

  // Handle scroll event
  window.addEventListener("scroll", () => {
    const idElements = getIdElements()

    // Determine which section is currently in view
    const activeId = (function getActiveId() {
      const scrollPosition = window.scrollY
      for (const section of idElements.slice().reverse()) {
        if (
          section.offsetTop -
            topBarElement.offsetHeight -
            scrollMarginTopOffset <=
          scrollPosition
        ) {
          return section.getAttribute("id")
        }
      }
      return null
    })()

    // Update the menu links based on the active section
    updateActiveLink(menuElement, activeId, activeClassName)
  })
}

// Function to update active link in the sidebar
function updateActiveLink(menuElement, activeId, activeClassName) {
  const links = menuElement.querySelectorAll("a.navLinks")
  links.forEach((link) => {
    const linkHref = link.getAttribute("href").substring(1) // Strip '#' from href
    if (linkHref === activeId) {
      link.classList.add(activeClassName)
    } else {
      link.classList.remove(activeClassName)
    }
  })
}

// Initialize the functionality
document.addEventListener("DOMContentLoaded", function () {
  trackActiveSection({
    activeClassName: "active", // Class to highlight the active link
    contentElement: document.querySelector("main.content"), // Content container
    menuElement: document.querySelector(".sidemenu"), // Sidebar menu element
    scrollMarginTopOffset: 4, // Margin offset for smooth scrolling
    topBarElement: document.querySelector("header"), // Top header element
  })
})

//Fetching Data From json
async function laptopData() {
  try {
    const response = await fetch("/data.json")
    const data = await response.json()

    //Recommended
    const quickR = document.querySelector("#gaming_quickR")
    const avgDeliveryR = document.querySelector("#gaming_avgDeliveryR")
    //Not - Recommended
    const quickNR = document.querySelector("#gaming_quick_notRec")
    //On - Hold
    const gamingHold = document.querySelector("#gaming_hold")

    // Display gaming laptops

    //Recommended

    //quick- delivery
    data.gaming.recommended.quick.forEach((gaming_data) => {
      const element = document.createElement("div")
      element.innerHTML = `
          <p class="my-3"><strong>${gaming_data.name}</strong></p>
          <blockquote>
            <ul class="list-[circle] text-gray-500 border-l border-gray-700 pl-9 tracking-wide space-y-1 ">
              <li>
                <p><strong>Price:</strong> ${gaming_data.price}</p>
              </li>
              <li>
                <p><strong>Processor:</strong> ${gaming_data.processor}</p>
              </li>
              <li>
                <p><strong>Graphics:</strong> ${gaming_data.graphics}</p>
              </li>
              <li>
                <p><strong>Battery Health:</strong> ${
                  gaming_data.battery_health
                }</p>
              </li>
              <li>
                <p><strong>RAM:</strong> ${gaming_data.ram}</p>
              </li>
              <li>
                <p><strong>Storage:</strong> ${gaming_data.storage}</p>
              </li>
              <li>
                <p><strong>Highlights:</strong> ${gaming_data.highlights}</p>
              </li>
              ${gaming_data.purchase_links
                .map(
                  (link) => `
                <li>
                  <p>
                    <strong>${link.platform}:</strong>
                    <a href="${link.url}" target="_blank" rel="nofollow" class="underline">Link</a>
                  </p>
                </li>
              `
                )
                .join("")}
              <li>
                <p>
                  <strong>Video Review:</strong>
                  <a href="${gaming_data.video_review}"
                  target="_blank" rel="nofollow" class="underline">Watch here</a>
                </p>
              </li>
            </ul>
          </blockquote>
          <br>
        `
      quickR.appendChild(element)
    })

    //avg. 23 days Delivery
    data.gaming.recommended.late_delivery.forEach((gaming_data) => {
      const element = document.createElement("div")
      element.innerHTML = `
          <p class="my-3"><strong>${gaming_data.name}</strong></p>
          <blockquote>
            <ul class="list-[circle] text-gray-500 border-l border-gray-700 pl-9 tracking-wide space-y-1 ">
              <li>
                <p><strong>Price:</strong> ${gaming_data.price}</p>
              </li>
              <li>
                <p><strong>Processor:</strong> ${gaming_data.processor}</p>
              </li>
              <li>
                <p><strong>Graphics:</strong> ${gaming_data.graphics}</p>
              </li>
              <li>
                <p><strong>Battery Health:</strong> ${
                  gaming_data.battery_health
                }</p>
              </li>
              <li>
                <p><strong>RAM:</strong> ${gaming_data.ram}</p>
              </li>
              <li>
                <p><strong>Storage:</strong> ${gaming_data.storage}</p>
              </li>
              <li>
                <p><strong>Highlights:</strong> ${gaming_data.highlights}</p>
              </li>
              ${gaming_data.purchase_links
                .map(
                  (link) => `
                <li>
                  <p>
                    <strong>${link.platform}:</strong>
                    <a href="${link.url}" target="_blank" rel="nofollow" class="underline">Link</a>
                  </p>
                </li>
              `
                )
                .join("")}
              <li>
                <p>
                  <strong>Video Review:</strong>
                  <a href="${gaming_data.video_review}"
                  target="_blank" rel="nofollow" class="underline">Watch here</a>
                </p>
              </li>
            </ul>
          </blockquote>
          <br>
        `
      avgDeliveryR.appendChild(element)
    })

    //Not-Recommended
    data.gaming.not_recommended.forEach((gaming_data) => {
      const element = document.createElement("div")
      element.innerHTML = `
          <p class="my-3"><strong>${gaming_data.name}</strong></p>
          <blockquote>
            <ul class="list-[circle] text-gray-500 border-l border-gray-700 pl-9 tracking-wide space-y-1 ">
              <li>
                <p><strong>Price:</strong> ${gaming_data.price}</p>
              </li>
              <li>
                <p><strong>Processor:</strong> ${gaming_data.processor}</p>
              </li>
              <li>
                <p><strong>Graphics:</strong> ${gaming_data.graphics}</p>
              </li>
              <li>
                <p><strong>Battery Health:</strong> ${
                  gaming_data.battery_health
                }</p>
              </li>
              <li>
                <p><strong>RAM:</strong> ${gaming_data.ram}</p>
              </li>
              <li>
                <p><strong>Storage:</strong> ${gaming_data.storage}</p>
              </li>
              <li>
                <p><strong>Highlights:</strong> ${gaming_data.highlights}</p>
              </li>
              ${gaming_data.purchase_links
                .map(
                  (link) => `
                <li>
                  <p>
                    <strong>${link.platform}:</strong>
                    <a href="${link.url}" target="_blank" rel="nofollow" class="underline">Link</a>
                  </p>
                </li>
              `
                )
                .join("")}
              <li>
                <p>
                  <strong>Video Review:</strong>
                  <a href="${gaming_data.video_review}"
                  target="_blank" rel="nofollow" class="underline">Watch here</a>
                </p>
              </li>
            </ul>
          </blockquote>
          <br>
        `
      quickNR.appendChild(element)
    })

    //On- Hold Laptops
    data.gaming.hold.forEach((gaming_data) => {
      const element = document.createElement("div")
      element.innerHTML = `
          <p class="my-3"><strong>${gaming_data.name}</strong></p>
          <blockquote>
            <ul class="list-[circle] text-gray-500 border-l border-gray-700 pl-9 tracking-wide space-y-1 ">
              <li>
                <p><strong>Price:</strong> ${gaming_data.price}</p>
              </li>
              <li>
                <p><strong>Processor:</strong> ${gaming_data.processor}</p>
              </li>
              <li>
                <p><strong>Graphics:</strong> ${gaming_data.graphics}</p>
              </li>
              <li>
                <p><strong>Battery Health:</strong> ${
                  gaming_data.battery_health
                }</p>
              </li>
              <li>
                <p><strong>RAM:</strong> ${gaming_data.ram}</p>
              </li>
              <li>
                <p><strong>Storage:</strong> ${gaming_data.storage}</p>
              </li>
              <li>
                <p><strong>Highlights:</strong> ${gaming_data.highlights}</p>
              </li>
              ${gaming_data.purchase_links
                .map(
                  (link) => `
                <li>
                  <p>
                    <strong>${link.platform}:</strong>
                    <a href="${link.url}" target="_blank" rel="nofollow" class="underline">Link</a>
                  </p>
                </li>
              `
                )
                .join("")}
              <li>
                <p>
                  <strong>Video Review:</strong>
                  <a href="${gaming_data.video_review}"
                  target="_blank" rel="nofollow" class="underline">Watch here</a>
                </p>
              </li>
            </ul>
          </blockquote>
          <br>
        `
      gamingHold.appendChild(element)
    })

    // Display Non Gaming Laptops
    const quickNonGaming = document.querySelector("#non_gaming_quickR")
    const notRecNonGaming = document.querySelector("#non_gaming_not_recommend")
    const onHoldNonGaming = document.querySelector("#non_gaming_on_hold")

    //Recommended
    data.non_gaming.recommended.forEach((gaming_data) => {
      const element = document.createElement("div")
      element.innerHTML = `
          <p class="my-3"><strong>${gaming_data.name}</strong></p>
          <blockquote>
            <ul class="list-[circle] text-gray-500 border-l border-gray-700 pl-9 tracking-wide space-y-1 ">
              <li>
                <p><strong>Price:</strong> ${gaming_data.price}</p>
              </li>
              <li>
                <p><strong>Processor:</strong> ${gaming_data.processor}</p>
              </li>
              <li>
                <p><strong>Graphics:</strong> ${gaming_data.graphics}</p>
              </li>
              <li>
                <p><strong>Battery Health:</strong> ${
                  gaming_data.battery_health
                }</p>
              </li>
              <li>
                <p><strong>RAM:</strong> ${gaming_data.ram}</p>
              </li>
              <li>
                <p><strong>Storage:</strong> ${gaming_data.storage}</p>
              </li>
              <li>
                <p><strong>Highlights:</strong> ${gaming_data.highlights}</p>
              </li>
              ${gaming_data.purchase_links
                .map(
                  (link) => `
                <li>
                  <p>
                    <strong>${link.platform}:</strong>
                    <a href="${link.url}" target="_blank" rel="nofollow" class="underline">Link</a>
                  </p>
                </li>
              `
                )
                .join("")}
              <li>
                <p>
                  <strong>Video Review:</strong>
                  <a href="${gaming_data.video_review}"
                  target="_blank" rel="nofollow" class="underline">Watch here</a>
                </p>
              </li>
            </ul>
          </blockquote>
          <br>
        `
      quickNonGaming.appendChild(element)
    })

    //Not recommended
    data.non_gaming.not_recommended.forEach((gaming_data) => {
      const element = document.createElement("div")
      element.innerHTML = `
          <p class="my-3"><strong>${gaming_data.name}</strong></p>
          <blockquote>
            <ul class="list-[circle] text-gray-500 border-l border-gray-700 pl-9 tracking-wide space-y-1 ">
              <li>
                <p><strong>Price:</strong> ${gaming_data.price}</p>
              </li>
              <li>
                <p><strong>Processor:</strong> ${gaming_data.processor}</p>
              </li>
              <li>
                <p><strong>Graphics:</strong> ${gaming_data.graphics}</p>
              </li>
              <li>
                <p><strong>Battery Health:</strong> ${
                  gaming_data.battery_health
                }</p>
              </li>
              <li>
                <p><strong>RAM:</strong> ${gaming_data.ram}</p>
              </li>
              <li>
                <p><strong>Storage:</strong> ${gaming_data.storage}</p>
              </li>
              <li>
                <p><strong>Highlights:</strong> ${gaming_data.highlights}</p>
              </li>
              ${gaming_data.purchase_links
                .map(
                  (link) => `
                <li>
                  <p>
                    <strong>${link.platform}:</strong>
                    <a href="${link.url}" target="_blank" rel="nofollow" class="underline">Link</a>
                  </p>
                </li>
              `
                )
                .join("")}
              <li>
                <p>
                  <strong>Video Review:</strong>
                  <a href="${gaming_data.video_review}"
                  target="_blank" rel="nofollow" class="underline">Watch here</a>
                </p>
              </li>
            </ul>
          </blockquote>
          <br>
        `
      notRecNonGaming.appendChild(element)
    })

    //On Hold
    data.non_gaming.hold.forEach((gaming_data) => {
      const element = document.createElement("div")
      element.innerHTML = `
          <p class="my-3"><strong>${gaming_data.name}</strong></p>
          <blockquote>
            <ul class="list-[circle] text-gray-500 border-l border-gray-700 pl-9 tracking-wide space-y-1 ">
              <li>
                <p><strong>Price:</strong> ${gaming_data.price}</p>
              </li>
              <li>
                <p><strong>Processor:</strong> ${gaming_data.processor}</p>
              </li>
              <li>
                <p><strong>Graphics:</strong> ${gaming_data.graphics}</p>
              </li>
              <li>
                <p><strong>Battery Health:</strong> ${
                  gaming_data.battery_health
                }</p>
              </li>
              <li>
                <p><strong>RAM:</strong> ${gaming_data.ram}</p>
              </li>
              <li>
                <p><strong>Storage:</strong> ${gaming_data.storage}</p>
              </li>
              <li>
                <p><strong>Highlights:</strong> ${gaming_data.highlights}</p>
              </li>
              ${gaming_data.purchase_links
                .map(
                  (link) => `
                <li>
                  <p>
                    <strong>${link.platform}:</strong>
                    <a href="${link.url}" target="_blank" rel="nofollow" class="underline">Link</a>
                  </p>
                </li>
              `
                )
                .join("")}
              <li>
                <p>
                  <strong>Video Review:</strong>
                  <a href="${gaming_data.video_review}"
                  target="_blank" rel="nofollow" class="underline">Watch here</a>
                </p>
              </li>
            </ul>
          </blockquote>
          <br>
        `
      onHoldNonGaming.appendChild(element)
    })
  } catch (error) {
    console.log("Error message: ", error)
  }
}

laptopData()
