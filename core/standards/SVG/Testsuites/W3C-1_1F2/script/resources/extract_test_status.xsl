<xsl:stylesheet
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns:d="http://www.w3.org/2000/02/svg/testsuite/description/"
  xmlns:h="http://www.w3.org/1999/xhtml"
  version="1.0">

  <xsl:output method="xml" version="1.0" encoding="UTF-8" omit-xml-declaration="yes"/>

  <xsl:template match="svg:svg">
    <xsl:apply-templates select="d:SVGTestCase"/>
  </xsl:template>

  <xsl:template match="d:SVGTestCase">
    <xsl:element name="test">
      <xsl:attribute name="name">
        <xsl:value-of select="substring-before(substring-after(@testname,'RCSfile: '), ',v')"/>
      </xsl:attribute>
      <xsl:attribute name="author">
        <xsl:value-of select="@author"/>
      </xsl:attribute>
      <xsl:attribute name="reviewer">
        <xsl:value-of select="@reviewer"/>
      </xsl:attribute>
      <xsl:attribute name="status">
        <xsl:value-of select="@status"/>
      </xsl:attribute>
      <xsl:if test="@issue != ''">
        <xsl:attribute name="issue">
          <xsl:value-of select="@issue"/>
        </xsl:attribute>
      </xsl:if>
      <xsl:apply-templates select="d:testDescription"/>
    </xsl:element>
  </xsl:template>

  <xsl:template match="d:testDescription">
    <xsl:value-of select="."/>
  </xsl:template>

</xsl:stylesheet>
