<xsl:stylesheet
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns:d="http://www.w3.org/2000/02/svg/testsuite/description/" 
  version="1.0">

  <xsl:output method="text" version="1.0" encoding="UTF-8" omit-xml-declaration="yes"/>

  <xsl:template match="svg:svg">
    <xsl:apply-templates select="d:SVGTestCase"/>
  </xsl:template>

  <xsl:template match="d:SVGTestCase">
    <xsl:apply-templates select="d:testDescription"/>
  </xsl:template>

  <xsl:template match="d:testDescription">
    <xsl:choose>
      <xsl:when test="@href != ''">
        <xsl:value-of select="@href"/>
      </xsl:when>
      <xsl:otherwise>
        <xsl:text>[url not defined]</xsl:text>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

</xsl:stylesheet>