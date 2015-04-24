<xsl:stylesheet version="1.0"
        xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
        xmlns:xsi="http://www.w3.org/2000/10/XMLSchema-instance">
  <!-- $RCSfile: test_status_2_html.xsl,v $ -->
  <!-- $Revision: 1.2 $ -->
  <xsl:output method="html" indent="yes"
          doctype-public="-//W3C//DTD SVG 20000802//EN"
          doctype-system="http://www.w3.org/TR/2000/CR-SVG-20000802/DTD/svg-20000802.dtd"/>

  <xsl:template match="testSuiteStatus">

    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <title>SVG Full 1.1 2nd Edition Test Creation Status</title>
        <!--
    <link rel="stylesheet" type="text/css" media="screen" href="ImpStatus.css" />
    -->
        <link rel="stylesheet" type="text/css" media="screen" href="ImpStatus.css" />
        <style type="text/css">
          body { margin-left:3em; margin-right:3em }
          table {border-collapse: collapse; border-color: #777}
          td {padding: 4px }
          .empty { background : #fff;  font-weight : 400 }
          .created { background : #5090fa; color: #fff; font-weight : 900 }
          .reviewed { background : #64affa;  font-weight : 900 }
          .imageCreated { background : #64dccd; font-weight : 900 }
          .imageOwnerReviewed { background : #64ebbe; color: #620; font-weight : 900 }
          .accepted { background : #57faa0;  font-weight : 400 }
          .issue { background : #fa6450;  font-weight : 900 }
          td img { vertical-align: middle; border: none; float: left; display: inline-block; }
          #overview td { text-align: right; }
        </style>
        <script>
          function toggleAccepted()
          {
            var sheet = document.getElementsByTagName("style")[0].sheet;
            var hide = "#results .accepted { display: none; }";
            if (/display: none/.test(sheet.cssRules[0].cssText))
              sheet.deleteRule(0);
            else
              sheet.insertRule(hide, 0);
          }
        </script>
      </head>
      <body>

        <h1>SVG Full 1.1 2nd Edition Test Creation Status</h1>

        <h2>Legend</h2>
        <table border="1">
          <tr>
            <td class="empty">empty</td>
            <td class="created">created</td>
            <td class="reviewed">reviewed</td>
            <td class="imageCreated">image created</td>
            <td class="imageOwnerReviewed">image owner reviewed</td>
            <td class="accepted">accepted</td>
            <td class="issue">issue</td>
          </tr>
        </table>

        <h2>Contributors</h2>
        See the <a href="../../../People.txt">contributors list</a>.

        <h2>Overview</h2>
        <table id="overview" border="1">
          <tr>
            <td class="empty">empty</td>
            <td><xsl:value-of select="count(.//test[@status='empty' or @status='[status]'])"/></td>
          </tr>
          <tr>
            <td class="created">created</td>
            <td><xsl:value-of select="count(.//test[@status='created'])"/></td>
          </tr>
          <tr>
            <td class="reviewed">reviewed</td>
            <td><xsl:value-of select="count(.//test[@status='reviewed'])"/></td>
          </tr>
          <tr>
            <td class="imageCreated">image created</td>
            <td><xsl:value-of select="count(.//test[@status='imageCreated'])"/></td>
          </tr>
          <tr>
            <td class="imageOwnerReviewed">image owner reviewed</td>
            <td><xsl:value-of select="count(.//test[@status='imageOwnerReviewed'])"/></td>
          </tr>
          <tr>
            <td class="accepted">accepted</td>
            <td><xsl:value-of select="count(.//test[@status='accepted'])"/></td>
          </tr>
          <tr>
            <td class="issue">issue</td>
            <td><xsl:value-of select="count(.//test[@issue])"/></td>
          </tr>
          <tr>
            <th>Total number of tests</th>
            <td><xsl:value-of select="count(.//test)"/></td>
          </tr>
        </table>
        
        <p>
          <a href="#" onclick="toggleAccepted()">Click to toggle accepted tests</a>
        </p>
        
        <xsl:apply-templates select="./*"/>

      </body>
      $Id: test_status_2_html.xsl,v 1.2 2010-09-14 08:24:48 edahlstr Exp $
    </html>

  </xsl:template>

  <xsl:template match="contributors">

    <h2>Contributors</h2>
    <div class="contributors">
      <dl>
        <xsl:apply-templates select="./*"/>
      </dl>
    </div>

  </xsl:template>

  <xsl:template match="contributor">

    <dt>
      <xsl:value-of select="./@name"/>
    </dt>
    <dd>
      <xsl:value-of select="./@email"/>
    </dd>

  </xsl:template>

  <xsl:template name="contributorName">
    <xsl:param name="symbol"/>

    <xsl:for-each select="/testSuiteStatus/contributors/contributor[@symbol = $symbol]/@name">
      <xsl:value-of select="."/>
    </xsl:for-each>
  </xsl:template>


  <xsl:template match="featureTests">
    <h2>
      Feature: <xsl:value-of select="./@featureName"/>
    </h2>

    <!--
  <dl>
    <dt>Owner</dt>
    <dd>
      <xsl:call-template name="contributorName">
        <xsl:with-param name="symbol" select="@owner"/>
      </xsl:call-template>
    </dd>
  </dl>
    -->

    <table id="results" border="1">
      <tr>
        <td>Test</td>
        <td>Author</td>
        <td>Reviewer</td>
        <td>Status</td>
        <td>Description</td>
        <xsl:if test="./test[@issue]">
          <td>Issue</td>
        </xsl:if>
      </tr>
      <xsl:apply-templates select="./test"/>
    </table>

  </xsl:template>

  <xsl:template match="test">

    <tr class="{@status}">
      <td>
        <xsl:variable name="ref" select="concat('../png/', substring-before(@name, '.'), '.png')"/>
        <a href="../svg/{@name}">
          <img src="{$ref}" width="64" height="64" />
          <xsl:value-of select="@name"/>
        </a>
      </td>
      <td>
        <xsl:value-of select="@author"/>
      </td>
      <!--
    <td>
      <xsl:call-template name="contributorName">
        <xsl:with-param name="symbol" select="@owner"/>
      </xsl:call-template>
    </td>
    -->
      <td>
        <xsl:value-of select="@reviewer"/>
      </td>
      <!--
    <td>
      <xsl:call-template name="contributorName">
        <xsl:with-param name="symbol" select="@reviewer"/>
      </xsl:call-template>
    </td>
    -->
      <xsl:if test="@status">
        <td>
          <xsl:attribute name="class">
            <xsl:choose>
              <xsl:when test="@issue">issue</xsl:when>
              <xsl:otherwise>
                <xsl:value-of select="@status"/>
              </xsl:otherwise>
            </xsl:choose>
          </xsl:attribute>
          <xsl:value-of select="@status"/>
        </td>
      </xsl:if>
      <td>
        <xsl:value-of select="."/>
      </td>
      <xsl:if test="@issue">
        <td>
          <xsl:attribute name="class">issue</xsl:attribute>
          <xsl:value-of select="@issue"/>
        </td>
      </xsl:if>
    </tr>

  </xsl:template>

</xsl:stylesheet>

