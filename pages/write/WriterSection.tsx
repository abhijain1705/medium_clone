import React, { useState, useRef, useEffect, createRef } from "react";
import WriteExpandedButton from "./WriteExpandedButton";

const WriterSection = () => {
  const styles = {
    WriterWrapper: "max-w-2xl mx-auto mt-8",
    Title: "text-[30px]",
    para: " text-[13px]",
    parent: "z-10",
    styleBox: "flex gap-2 bg-black px-4 py-[4px] text-white",
  };

  const [buttonStyle, setButtonStyle] = useState({ top: "100px" });
  const editorRef = useRef<HTMLDivElement>(null);
  const imgBtnRef = createRef<HTMLDivElement>();
  const [hasText, setHasText] = useState(false);
  const [showToolbar, setShowToolbar] = useState(false);
  const [toolbarPosition, setToolbarPosition] = useState({ top: 0, left: 0 });
  const [anchorData, setanchorData] = useState<Record<string, any>>({});
  const [hoveredElementData, setHoveredElementData] = useState<{
    id: string;
    top: string;
    left: string;
  } | null>();
  const [numChildrenBeforeCursor, setNumChildrenBeforeCursor] = useState(0);
  const [numChildrenAfterCursor, setNumChildrenAfterCursor] = useState(0);

  const getCaretPosition = () => {
    const el = editorRef.current;
    if (!el) return;

    const selection = window.getSelection();
    if (!selection) return;

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    const { offset, line } = getCursorPosition(
      el,
      selection.anchorNode,
      selection.anchorOffset
    );

    setButtonStyle({
      top: `${rect.top + 20}px`,
    });
    if (rect.top === 0) {
      setButtonStyle({
        top: `100px`,
      });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }

    const div = editorRef.current;
    const selection = window.getSelection();
    if (!div || !selection) {
      return;
    }
    const range = document.createRange();
    range.setStart(div, 0);
    range.setEnd(selection.anchorNode!, selection.anchorOffset);

    // Get the number of children before the cursor position
    const numChildrenBefore = range.cloneContents().childElementCount;
    console.log(numChildrenBefore, "before");
    setNumChildrenBeforeCursor(numChildrenBefore);

    // Get the number of children after the cursor position
    const range2 = document.createRange();
    range2.setStart(selection.anchorNode!, selection.anchorOffset);
    range2.setEnd(div, div.childNodes.length);
    const numChildrenAfter = range2.cloneContents().childElementCount;
    console.log(numChildrenAfter, "after");
    setNumChildrenAfterCursor(numChildrenAfter);
  };

  const handleInput = () => {
    if (editorRef.current?.textContent) {
      setHasText(editorRef.current.textContent.trim().length > 0);
      getCaretPosition();
    }
  };

  const handleKeyUp = () => {
    getCaretPosition();
  };

  const getCursorPosition = (editableDiv: any, node: any, position: any) => {
    const lines = editableDiv.innerText.split("\n");
    let line = 0;
    let offset = 0;

    for (let i = 0; i < lines.length; i++) {
      if (offset + lines[i].length >= position) {
        line = i;
        break;
      }
      offset += lines[i].length + 1;
    }

    let start = 0;
    let end = editableDiv.innerText.length;
    let range = document.createRange();
    range.setStart(editableDiv, 0);
    range.setEnd(node, position);
    start = range.toString().length;
    range.setStart(editableDiv, 0);
    range.setEnd(node, node.length);
    end = range.toString().length;

    return { start, end, offset: start + (end - start) / 2, line };
  };

  // Listen for changes to the selection
  useEffect(() => {
    const handleSelectionChange = () => {
      const newSelection = window.getSelection();

      if (newSelection && newSelection.toString().length > 0) {
        setShowToolbar(true);

        // Get the position of the selected text
        const range = newSelection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        setToolbarPosition({ top: rect.bottom, left: rect.left });
      } else {
        setShowToolbar(false);
      }
    };

    document.addEventListener("selectionchange", handleSelectionChange);

    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, []);

  const handleBoldClick = () => {
    const selection = window.getSelection();
    if (!selection) return;
    const range = selection.getRangeAt(0);
    const startContainerParent = range.startContainer.parentNode as Element;
    if (!startContainerParent) return;
    // Check if parent element is <strong>
    if (startContainerParent.tagName.toLowerCase() === "strong") {
      let strongContent = startContainerParent.innerHTML;
      if (strongContent === selection.toString()) {
        // Unwrap the selected text from <strong> element
        const parent = startContainerParent.parentNode as Element;
        if (!parent) return;
        parent.replaceChild(range.extractContents(), startContainerParent);
      } else {
        // Remove the selected text from <strong> element and add it to the parent div
        const parent = startContainerParent.parentNode as Element;
        if (!parent) return;
        const selectionText = selection.toString();
        const strongText = startContainerParent.innerHTML;
        const textBeforeSelection = strongText.slice(
          0,
          strongText.indexOf(selectionText)
        );
        const textAfterSelection = strongText.slice(
          strongText.indexOf(selectionText) + selectionText.length
        );
        if (textBeforeSelection) {
          const beforeSibling = document.createElement("strong");
          beforeSibling.textContent = textBeforeSelection;
          parent.insertBefore(beforeSibling, startContainerParent);
        }
        if (textAfterSelection) {
          const afterSibling = document.createElement("strong");
          afterSibling.textContent = textAfterSelection;
          parent.insertBefore(afterSibling, startContainerParent.nextSibling);
        }
        parent.replaceChild(range.extractContents(), startContainerParent);
      }
    } else {
      // Wrap the selected text with <strong> element
      const strong = document.createElement("strong");
      strong.appendChild(range.extractContents());
      range.insertNode(strong);
    }
  };

  const handleItalicClick = () => {
    const selection = window.getSelection();
    if (!selection) return;
    const range = selection.getRangeAt(0);
    const startContainerParent = range.startContainer.parentNode as Element;
    if (!startContainerParent) return;
    // Check if parent element is <strong>
    if (startContainerParent.tagName.toLowerCase() === "em") {
      let strongContent = startContainerParent.innerHTML;
      if (strongContent === selection.toString()) {
        // Unwrap the selected text from <strong> element
        const parent = startContainerParent.parentNode as Element;
        console.log(parent);

        if (!parent) return;
        parent.replaceChild(range.extractContents(), startContainerParent);
      } else {
        // Remove the selected text from <strong> element and add it to the parent div
        const parent = startContainerParent.parentNode as Element;
        if (!parent) return;
        const selectionText = selection.toString();
        const strongText = startContainerParent.innerHTML;
        const textBeforeSelection = strongText.slice(
          0,
          strongText.indexOf(selectionText)
        );
        const textAfterSelection = strongText.slice(
          strongText.indexOf(selectionText) + selectionText.length
        );
        if (textBeforeSelection) {
          const beforeSibling = document.createElement("em");
          beforeSibling.textContent = textBeforeSelection;
          parent.insertBefore(beforeSibling, startContainerParent);
        }
        if (textAfterSelection) {
          const afterSibling = document.createElement("em");
          afterSibling.textContent = textAfterSelection;
          parent.insertBefore(afterSibling, startContainerParent.nextSibling);
        }
        parent.replaceChild(range.extractContents(), startContainerParent);
      }
    } else {
      // Wrap the selected text with <strong> element
      const strong = document.createElement("em");
      strong.appendChild(range.extractContents());
      range.insertNode(strong);
    }
  };

  const handleLinkClick = () => {
    const selection = window.getSelection();
    if (!selection) return;

    const range = selection.getRangeAt(0);
    const startContainerParent = range.startContainer.parentNode as Element;
    if (!startContainerParent) return;

    // Check if parent element is <a>
    if (startContainerParent.tagName.toLowerCase() === "a") {
      // Unwrap the selected text from <a> element
      const parent = startContainerParent.parentNode as Element;
      if (!parent) return;

      // Replace the <a> element with the selected text
      const selectedText = range.extractContents();
      parent.replaceChild(selectedText, startContainerParent);
    } else {
      // Prompt the user for the URL of the link
      const linkUrl = prompt("Enter the URL for the link:");

      // Wrap the selected text with <a> element and set the href attribute to the URL entered by the user
      if (linkUrl) {
        const parentElement = range.commonAncestorContainer.parentElement;
        parentElement!.style.display = "inline";
        const link = document.createElement("a");
        link.setAttribute("href", linkUrl);
        link.style.textDecoration = "underline";
        link.style.color = "blue";
        link.setAttribute("id", Object.keys(anchorData).length.toString());
        const selectedText = range.extractContents();
        link.appendChild(selectedText);
        range.insertNode(link);
        parentElement!.style.display = "";
        let temporaryAnchorData = { ...anchorData };
        temporaryAnchorData[Object.keys(anchorData).length.toString()] = {
          link: linkUrl,
          id: Object.keys(anchorData).length.toString(),
        };
        setanchorData(temporaryAnchorData);
      }
    }
  };

  function handleMouseOver(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    setHoveredElementData(null);
    // get the target element that the mouse is currently over
    const targetElement = event.target as HTMLElement;
    if (targetElement.tagName.toLowerCase() === "a") {
      const rect = targetElement.getBoundingClientRect();
      // get the data of the target element and update the state

      setHoveredElementData({
        id: targetElement.id,
        top: `${rect.bottom}px`,
        left: `${rect.left}px`,
      });
    } else {
      setHoveredElementData(null);
    }
  }

  const handleTitle = () => {
    const selection = window.getSelection();
    if (!selection) return;
    const range = selection.getRangeAt(0);
    const startContainerParent = range.startContainer.parentNode as Element;
    if (!startContainerParent) return;
    // Check if parent element is <h1>
    if (startContainerParent.tagName.toLowerCase() === "h1") {
      let strongContent = startContainerParent.innerHTML;
      if (strongContent === selection.toString()) {
        // Unwrap the selected text from <h1> element
        const parent = startContainerParent.parentNode as Element;
        console.log(parent);

        if (!parent) return;
        parent.replaceChild(range.extractContents(), startContainerParent);
      } else {
        // Remove the selected text from <h1> element and add it to the parent div
        const parent = startContainerParent.parentNode as Element;
        if (!parent) return;
        const selectionText = selection.toString();
        const strongText = startContainerParent.innerHTML;
        const textBeforeSelection = strongText.slice(
          0,
          strongText.indexOf(selectionText)
        );
        const textAfterSelection = strongText.slice(
          strongText.indexOf(selectionText) + selectionText.length
        );
        if (textBeforeSelection) {
          const beforeSibling = document.createElement("h1");
          beforeSibling.textContent = textBeforeSelection;
          parent.insertBefore(beforeSibling, startContainerParent);
        }
        if (textAfterSelection) {
          const afterSibling = document.createElement("h1");
          afterSibling.textContent = textAfterSelection;
          parent.insertBefore(afterSibling, startContainerParent.nextSibling);
        }
        parent.replaceChild(range.extractContents(), startContainerParent);
      }
    } else {
      // Wrap the selected text with <h1> element
      const strong = document.createElement("h1");
      strong.style.fontSize = "30px";
      strong.appendChild(range.extractContents());
      range.insertNode(strong);
    }
  };

  const handleSubTitle = () => {
    const selection = window.getSelection();
    if (!selection) return;
    const range = selection.getRangeAt(0);
    const startContainerParent = range.startContainer.parentNode as Element;
    if (!startContainerParent) return;
    // Check if parent element is <h1>
    if (startContainerParent.tagName.toLowerCase() === "h6") {
      let strongContent = startContainerParent.innerHTML;
      if (strongContent === selection.toString()) {
        // Unwrap the selected text from <h1> element
        const parent = startContainerParent.parentNode as Element;
        console.log(parent);

        if (!parent) return;
        parent.replaceChild(range.extractContents(), startContainerParent);
      } else {
        // Remove the selected text from <h1> element and add it to the parent div
        const parent = startContainerParent.parentNode as Element;
        if (!parent) return;
        const selectionText = selection.toString();
        const strongText = startContainerParent.innerHTML;
        const textBeforeSelection = strongText.slice(
          0,
          strongText.indexOf(selectionText)
        );
        const textAfterSelection = strongText.slice(
          strongText.indexOf(selectionText) + selectionText.length
        );
        if (textBeforeSelection) {
          const beforeSibling = document.createElement("h6");
          beforeSibling.textContent = textBeforeSelection;
          parent.insertBefore(beforeSibling, startContainerParent);
        }
        if (textAfterSelection) {
          const afterSibling = document.createElement("h6");
          afterSibling.textContent = textAfterSelection;
          parent.insertBefore(afterSibling, startContainerParent.nextSibling);
        }
        parent.replaceChild(range.extractContents(), startContainerParent);
      }
    } else {
      // Wrap the selected text with <h1> element
      const strong = document.createElement("h6");
      strong.style.fontSize = "13px";
      strong.appendChild(range.extractContents());
      range.insertNode(strong);
    }
  };

  function handleAddImage(SelectedImage: File | null) {
    const div = editorRef.current;
    if (!div) {
      return;
    }
    const selection = window.getSelection();
    if (!selection) {
      return;
    }
    const range = selection.getRangeAt(0);
    const parent = range.commonAncestorContainer.parentNode;
    console.log(parent);
    
    // Only add the img element if the parent is the contentEditable div
    if (parent === div) {
      const img = document.createElement("img");
      img.src = "https://example.com/image.png";
      range.insertNode(img);
      range.setStartAfter(img);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }

  return (
    <div className={styles.parent}>
      {showToolbar && (
        <>
          <div
            className={styles.styleBox}
            style={{
              position: "absolute",
              ...toolbarPosition,
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            <button onClick={handleBoldClick}>
              <strong>B</strong>
            </button>
            <button onClick={handleItalicClick}>
              <strong>
                <em>I</em>
              </strong>
            </button>
            <button onClick={handleLinkClick}>
              <svg
                fill="none"
                color="white"
                width={20}
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                ></path>
              </svg>
            </button>
            <button onClick={handleTitle} className={styles.Title}><strong>T</strong></button>
            <button onClick={handleSubTitle} className={styles.para}><strong>T</strong></button>
          </div>
        </>
      )}
      {hoveredElementData && (
        <div
          className={styles.styleBox}
          style={{
            position: "absolute",
            top: hoveredElementData.top,
            left: hoveredElementData.left,
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
        >
          <a href={anchorData[hoveredElementData.id]["link"]} target="_blank">
            {anchorData[hoveredElementData.id]["link"]}
          </a>
        </div>
      )}
      <WriteExpandedButton imgBtnRef={imgBtnRef} handleAddImage={handleAddImage} buttonStyle={buttonStyle} />
      <div
        onMouseOver={(e) => handleMouseOver(e)}
        id="editor"
        placeholder="Tell a story..."
        className={`${styles.WriterWrapper} text_editor`}
        contentEditable
        onKeyDown={handleKeyDown}
        onInput={handleInput}
        onKeyUp={handleKeyUp}
        ref={editorRef}
      ></div>
    </div>
  );
};

export default WriterSection;
