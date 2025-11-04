(() => {
  const reduceMotionQuery =
    typeof window.matchMedia === "function"
      ? window.matchMedia("(prefers-reduced-motion: reduce)")
      : null;

  const shouldReduceMotion = () => reduceMotionQuery?.matches === true;

  const applyTypewriter = (el) => {
    if (!el) return;
    if (el.dataset.typewriterInitialized === "true") return;

    const fullHTML = el.innerHTML;
    const speed = Number(el.dataset.typeSpeed) || 40;

    if (!fullHTML || shouldReduceMotion()) {
      el.dataset.typewriterInitialized = "true";
      return;
    }

    const template = document.createElement("template");
    template.innerHTML = fullHTML;
    const fragment = template.content.cloneNode(true);

    const textNodes = [];
    const collectTextNodes = (node) => {
      node.childNodes.forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          const fullText = child.textContent ?? "";
          child.textContent = "";
          textNodes.push({ node: child, fullText, index: 0, length: fullText.length });
        } else {
          collectTextNodes(child);
        }
      });
    };

    el.innerHTML = "";
    el.appendChild(fragment);
    collectTextNodes(el);

    const caret = document.createElement("span");
    caret.className = "typewriter-caret";
    caret.setAttribute("aria-hidden", "true");
    el.appendChild(caret);

    const typeNext = () => {
      let cursor = 0;
      while (cursor < textNodes.length) {
        const item = textNodes[cursor];
        if (item.index < item.length) {
          item.node.textContent += item.fullText.charAt(item.index);
          item.index += 1;
          break;
        }
        cursor += 1;
      }

      if (cursor >= textNodes.length) {
        caret.classList.add("typewriter-caret--done");
        el.dataset.typewriterInitialized = "true";
        return;
      }

      window.setTimeout(typeNext, speed);
    };

    window.setTimeout(typeNext, speed);
    el.dataset.typewriterInitialized = "true";
  };

  const bootstrap = () => {
    document.querySelectorAll("[data-typewriter]").forEach(applyTypewriter);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap, { once: true });
  } else {
    bootstrap();
  }

  if (reduceMotionQuery) {
    const listener = (event) => {
      if (event.matches) {
        document
          .querySelectorAll("[data-typewriter]")
          .forEach((el) => (el.dataset.typewriterInitialized = "true"));
      }
    };

    if (typeof reduceMotionQuery.addEventListener === "function") {
      reduceMotionQuery.addEventListener("change", listener);
    } else if (typeof reduceMotionQuery.addListener === "function") {
      reduceMotionQuery.addListener(listener);
    }
  }
})();
