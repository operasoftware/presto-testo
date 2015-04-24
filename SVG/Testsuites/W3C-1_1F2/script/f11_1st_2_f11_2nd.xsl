<!--
  This XSLT is designed to change the test template of SVG 1.1 test files from
  the old version to the current version [1.3] template.
-->
<xsl:stylesheet
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns:d="http://www.w3.org/2000/02/svg/testsuite/description/" 
  version="1.0">

  <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="yes" omit-xml-declaration="yes"/>

  <!--
    Common attributes for root svg element on an SVG test case.
  -->
  <xsl:attribute-set name="root_attribute_list">
    <xsl:attribute name="id">svg-root</xsl:attribute>
    <xsl:attribute name="width">100%</xsl:attribute>
    <xsl:attribute name="height">100%</xsl:attribute>
    <xsl:attribute name="viewBox">0 0 480 360</xsl:attribute>
  </xsl:attribute-set>  
  
  <!--
    "svg:svg" element template
    
    This template sets the outermost "svg" element and calls other templates to
    initialse the various components that make up an SVG test case.
  -->
  <xsl:template match="svg:svg">   
    <xsl:if test="@id = 'svg-root'">
      <svg xsl:use-attribute-sets="root_attribute_list"
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <xsl:copy-of select="./@*[local-name() != 'id' and local-name() != 'width' and local-name() != 'height' and local-name() != 'viewBox']"/>
        <xsl:text xml:space="preserve" disable-output-escaping="yes">
  &lt;!--======================================================================--&gt;
  &lt;!--=  SVG 1.1 2nd Edition Test Case                                     =--&gt;
  &lt;!--======================================================================--&gt;
  &lt;!--=  Copyright 2009 World Wide Web Consortium, (Massachusetts          =--&gt;
  &lt;!--=  Institute of Technology, European Research Consortium for         =--&gt;
  &lt;!--=  Informatics and Mathematics (ERCIM), Keio University).            =--&gt;
  &lt;!--=  All Rights Reserved.                                              =--&gt;
  &lt;!--=  See http://www.w3.org/Consortium/Legal/.                          =--&gt;
  &lt;!--======================================================================--&gt;
        </xsl:text>
        <xsl:apply-templates select="d:SVGTestCase"/>
        <title id="test-title">&#x24;RCSfile&#x24;</title>
        <defs>
          <font-face font-family="SVGFreeSansASCII" unicode-range="U+0-7F">
            <font-face-src>
              <font-face-uri xlink:href="../resources/SVGFreeSans.svg#ascii"/>
            </font-face-src>
          </font-face>
        </defs>
        <xsl:apply-templates select="svg:g" mode="test_body_content"/>
        <g font-family="SVGFreeSansASCII,sans-serif" font-size="32">
          <text id="revision" x="10" y="340" stroke="none" fill="black">
            <xsl:text xml:space="preserve" disable-output-escaping="yes">&#x24;Revision&#x24;</xsl:text>
          </text>
        </g>
        <rect id="test-frame" x="1" y="1" width="478" height="358" fill="none" stroke="#000"/>
        <xsl:text xml:space="preserve" disable-output-escaping="yes">
  &lt;!-- comment out this watermark once the test is approved --&gt;</xsl:text>
        <xsl:apply-templates select="svg:g[last()]" mode="draft_water_mark"/>
      </svg>
    </xsl:if>
  </xsl:template>


  <!--
    "d:SVGTestCase" element template

    This template creates the "SVGTestCase" element and sets its attributes.
    If the value of the attributes are unsepecified on the old SVG test file
    this template will initialise the attributes with default values.
    
    This template additionally creates the child "testDescription",
    "operatorScript" and "passCriteria" elements. The value of the
    "OperatorScript" in the old SVG test file is used to initialise the
    "operatorScript" element. All other elements are initialised with default
    values.
  -->
  <xsl:template match="d:SVGTestCase">
    <d:SVGTestCase xmlns:d="http://www.w3.org/2000/02/svg/testsuite/description/" template-version="1.4">
      <!--
        Set attributes of the SVGTestCase element
        
        The XPath command d:OperatorScript[1]/@[attribute_name] will select
        the first "OperatorScript node" then select the attribute value
        specified by "attribute_name"
      -->

      <!-- set "author" attribute -->
      <xsl:attribute name="author">
        <xsl:choose>
          <xsl:when test="./@owner != ''">
            <xsl:value-of select="./@owner"/>
          </xsl:when>
          <xsl:otherwise>
            <xsl:text>[author]</xsl:text>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:attribute>

      <!-- set "reviewer" attribute -->
      <xsl:attribute name="reviewer">
        <xsl:choose>
          <xsl:when test="./@reviewer != ''">
            <xsl:value-of select="./@reviewer"/>
          </xsl:when>
          <xsl:otherwise>
            <xsl:text>[reviewer]</xsl:text>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:attribute>

      <!-- set "status" attribute -->
      <xsl:attribute name="status">
        <xsl:choose>
          <xsl:when test="./@status != ''">
            <xsl:value-of select="./@status"/>
          </xsl:when>
          <xsl:otherwise>
            <xsl:text>[status]</xsl:text>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:attribute>

      <!-- set "version" attribute -->
      <xsl:attribute name="version">
        <xsl:choose>
          <xsl:when test="./@version != ''">
            <xsl:value-of select="./@version"/>
          </xsl:when>
          <xsl:otherwise>
            <xsl:text>&#x24;Revision&#x24;</xsl:text>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:attribute>

      <!-- set "testname" attribute -->
      <xsl:attribute name="testname">
        <xsl:text>&#x24;RCSfile&#x24;</xsl:text>
      </xsl:attribute>


      <!-- Create the "testDescription" element -->
      <d:testDescription xmlns="http://www.w3.org/1999/xhtml" href="http://www.w3.org/TR/SVG11/[chapter]#[section]">
          <p>
            <xsl:text xml:space="preserve">
          [[Describe which section and what specific assertion is being tested
          by the test. If the test has a number of sub tests, multiple
          "testComponent" elements can be specified within the "testDescription"
          element.]]
          </xsl:text>
          </p>
      </d:testDescription>

      <!-- Create the "operatorScript" element -->
      <d:operatorScript xmlns="http://www.w3.org/1999/xhtml">
        <xsl:apply-templates />
      </d:operatorScript>

      <d:passCriteria xmlns="http://www.w3.org/1999/xhtml">
        <p>
          <xsl:text xml:space="preserve">
        [[Describe the pass criteria of the test here. The pass criteria is what
        should be displayed when the test is run.]]
          </xsl:text>
        </p>
      </d:passCriteria>
    </d:SVGTestCase>
  </xsl:template>


  <!--
    "d:Paragraph" element template

    This tempalte coverts a "d:Paragraph" element with a value to an XHTML
    "p" element whilst preserving the value of the element. If the "d:Paragraph"
    contains an empty value, a "p" element is created and initialised to the
    default value.
  -->
  <xsl:template match="d:Paragraph">
    <xsl:choose>
      <xsl:when test=". != ''">
        <xsl:element name="p">
          <xsl:value-of select="."/>
        </xsl:element>
      </xsl:when>
      <xsl:otherwise>
        <xsl:element name="p">
          <xsl:text xml:space="preserve">
        [[Describe how to use the here. The instructions should specify any
        steps requied to run the test or any manual operation that need
        to be performed to run the test.]]
          </xsl:text>
        </xsl:element>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>


  <!--
    "svg:g" element template

    This template copies the content that tests the implementation from the
    old test file to the new test file.

    The template checks for a "g" element with id value of "test-body-content"
    and on a match copies the element and its contents.
  -->
  <xsl:template match="svg:g" mode="test_body_content">
    <xsl:if test="@id = 'test-body-content'">
      <svg:g id="test-body-content" font-family="SVGFreeSansASCII,sans-serif" font-size="18">
        <xsl:choose>
          <xsl:when test="./@transform != ''">
            <svg:g>
              <xsl:copy-of select="./@transform"/>
              <xsl:copy-of select="./*"/>
            </svg:g>
          </xsl:when>
          <xsl:otherwise>
            <xsl:copy-of select="./*"/>
          </xsl:otherwise>
        </xsl:choose>        
      </svg:g>
    </xsl:if>
  </xsl:template>
 
  <!--
  "svg:g" element template [Copy draft watermark]

  This template copies the draft watermark from the old test file to the new
  test file.

  The template checks for a "g" element with id value of "draft_water_mark"
  and on a match copies the element and its contents. If a match is not found
  A commented version draft watermark is inserted.
  -->
  <xsl:template match="svg:g" mode="draft_water_mark">
    <xsl:choose>
      <xsl:when test="@id = 'draft-watermark'">
        <svg:g id="draft-watermark">
          <svg:rect x="1" y="1" width="478" height="20" fill="red" stroke="black" stroke-width="1"/>
          <svg:text font-family="SVGFreeSansASCII,sans-serif" font-weight="bold" font-size="20" x="240"
            text-anchor="middle" y="18" stroke-width="0.5" stroke="black" fill="white">DRAFT</svg:text>
        </svg:g>
      </xsl:when>
      <xsl:otherwise>
        <xsl:text xml:space="preserve" disable-output-escaping="yes">&lt;!--&lt;g id=&quot;draft-watermark&quot;&gt;
    &lt;rect x=&quot;1&quot; y=&quot;1&quot; width=&quot;478&quot; height=&quot;20&quot; fill=&quot;red&quot; stroke=&quot;black&quot; stroke-width=&quot;1&quot;/&gt;
    &lt;text font-family=&quot;SVGFreeSansASCII,sans-serif&quot; font-weight=&quot;bold&quot; font-size=&quot;20&quot; x=&quot;240&quot;
      text-anchor=&quot;middle&quot; y=&quot;18&quot; stroke-width=&quot;0.5&quot; stroke=&quot;black&quot; fill=&quot;white&quot;&gt;DRAFT&lt;/text&gt;
  &lt;/g&gt;--&gt;
        </xsl:text>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

</xsl:stylesheet>