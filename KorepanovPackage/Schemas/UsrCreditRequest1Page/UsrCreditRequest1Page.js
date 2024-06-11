// В ковычках название модуля, в [] и () указываются зависимости
define("UsrCreditRequest1Page", [], function () {
  return {
    // Название схемы(объекта)
    entitySchemaName: "UsrCreditRequest",
    // Аттрибуты(местные переменные)
    attributes: {
      // Поле UsrCreditOwner на странице UsrCreditRequest1Page
      UsrCreditOwner: {
        // Работаем со справочником
        lookupListConfig: {
          // Добавляем фильтр
          filters: [
            function () {
              // Создаем фильтр
              var filters = Ext.create("BPMSoft.FilterGroup");
              // Прописываем логический оператор И, потому что несколько фильтров будет для поля
              filters.logicalOperation = BPMSoft.LogicalOperatorType.AND;
              // Добавляем кастомный фильтр и даем ему любое название, например "ClientFilter"
              filters.add(
                "ClientFilter",
                // Фильтруем с виртуальной колонкой, у которой ТИП РАВЕН "Клиент"
                BPMSoft.createColumnFilterWithParameter(
                  BPMSoft.ComparisonType.EQUAL,
                  "Type.Name",
                  "Клиент"
                )
              );
              // Добавляем кастомный фильтр и даем ему любое название, например "AgeFilter"
              filters.add(
                "AgeFilter",
                // Фильтруем с виртуальной колонкой, у которой ВОЗРАСТ БОЛЬШЕ ИЛИ РАВНО 18
                BPMSoft.createColumnFilterWithParameter(
                  BPMSoft.ComparisonType.GREATER_OR_EQUAL,
                  "Age",
                  18
                )
              );
              return filters;
            },
          ],
        },
      },
      // Аттрибут, хранящий коллекцию Заявителей
      ResponseCollectionOwners: {
        dataValueType: BPMSoft.DataValueType.COLLECTION,
        type: BPMSoft.ViewModelColumnType.VIRTUAL_COLUMN,
      },
      // Аттрибут, хранящий длину коллкекции Заявителей
      OwnersQuontity: {
        dataValueType: BPMSoft.DataValueType.INTEGER,
        type: BPMSoft.ViewModelColumnType.VIRTUAL_COLUMN,
      },
      // Аттрибут, хранящий системную настройку MaximumCreditRequests
      MaximumCreditRequests: {
        dataValueType: BPMSoft.DataValueType.INTEGER,
        type: BPMSoft.ViewModelColumnType.VIRTUAL_COLUMN,
      },
    },
    modules: /**SCHEMA_MODULES*/ {} /**SCHEMA_MODULES*/,
    details: /**SCHEMA_DETAILS*/ {
      Files: {
        schemaName: "FileDetailV2",
        entitySchemaName: "UsrCreditRequestFile",
        filter: {
          masterColumn: "Id",
          detailColumn: "UsrCreditRequest",
        },
      },
    } /**SCHEMA_DETAILS*/,
    // Бизнес-правила
    businessRules: /**SCHEMA_BUSINESS_RULES*/ {
      UsrCreditDateValidity: {
        "9b4c23f1-1c08-4cf9-8ed1-17e27476097f": {
          uId: "9b4c23f1-1c08-4cf9-8ed1-17e27476097f",
          enabled: true,
          removed: false,
          ruleType: 3,
          populatingAttributeSource: {
            expression: {
              type: 6,
              formula: {
                type: 2,
                dataType: 7,
                code: "DATEADD",
                arguments: [
                  {
                    type: 2,
                    dataType: 7,
                    code: "GETDATE",
                    arguments: [],
                  },
                  {
                    type: 1,
                    dataType: 4,
                    operandType: 0,
                    value: "90",
                  },
                  {
                    type: 1,
                    dataType: 1,
                    operandType: 0,
                    value: "D",
                  },
                ],
              },
            },
          },
          logical: 0,
          conditions: [
            {
              comparisonType: 3,
              leftExpression: {
                type: 1,
                attribute: "UsrCreditCategory",
              },
              rightExpression: {
                type: 0,
                value: "d1cb3bb1-cd21-4796-acfe-a7bbeae43ad9",
                dataValueType: 10,
              },
            },
          ],
        },
        "f69db492-cf0e-48d1-b537-0d25b2ad25e7": {
          uId: "f69db492-cf0e-48d1-b537-0d25b2ad25e7",
          enabled: true,
          removed: false,
          ruleType: 3,
          populatingAttributeSource: {
            expression: {
              type: 6,
              formula: {
                type: 2,
                dataType: 7,
                code: "DATEADD",
                arguments: [
                  {
                    type: 2,
                    dataType: 7,
                    code: "GETDATE",
                    arguments: [],
                  },
                  {
                    type: 1,
                    dataType: 4,
                    operandType: 0,
                    value: "45",
                  },
                  {
                    type: 1,
                    dataType: 1,
                    operandType: 0,
                    value: "D",
                  },
                ],
              },
            },
          },
          logical: 0,
          conditions: [
            {
              comparisonType: 3,
              leftExpression: {
                type: 1,
                attribute: "UsrCreditCategory",
              },
              rightExpression: {
                type: 0,
                value: "1ae62ab2-288f-4563-8177-329d7146b365",
                dataValueType: 10,
              },
            },
          ],
        },
        // Кастомное бизнес-правило, обнуляющее поля
        "5e4a8e64-a922-4e2e-933f-aa05c66840bb": {
          uId: "5e4a8e64-a922-4e2e-933f-aa05c66840bb",
          enabled: true,
          removed: false,
          ruleType: 3,
          populatingAttributeSource: {
            expression: {
              type: 1,
              attribute: null,
              attributePath: null,
            },
          },
          logical: 0,
          conditions: [
            {
              comparisonType: 3,
              leftExpression: {
                type: 1,
                attribute: "UsrCreditCategory",
              },
              rightExpression: {
                type: 0,
                value: "2b88b782-f291-4fac-ba36-5ad3b06dbcc3",
                dataValueType: 10,
              },
            },
          ],
        },
      },
    } /**SCHEMA_BUSINESS_RULES*/,
    methods: {
      /* Запускается при загрузке схемы страницы и вызывает метод подсчета текущего количества Заявителей и метод считывания значения системной настройки. */
      onEntityInitialized: function () {
        this.callParent(arguments);
        this.getAuthorNumber();
        this.getMaximumCreditRequests();
      },
      /* Вычисляет текущее количество заявителей и записывает полученное значение в атрибут "ResponseCollectionOwners". */
      getAuthorNumber: function () {
        var author = this.get("UsrCreditOwner.Name");
        var esqAuthor = this.Ext.create("BPMSoft.EntitySchemaQuery", {
          rootSchemaName: "UsrCreditRequest",
        });
        esqAuthor.addColumn("UsrCreditOwner");
        var groupFilters = this.Ext.create("BPMSoft.FilterGroup");
        var filterAuthor = this.BPMSoft.createColumnFilterWithParameter(
          this.BPMSoft.ComparisonType.EQUAL,
          "UsrCreditOwner.Name",
          author
        );
        groupFilters.addItem(filterAuthor);
        esqAuthor.filters.add(groupFilters);
        esqAuthor.getEntityCollection(function (result) {
          if (!result.success) {
            this.showInformationDialog("Request error");
            return;
          } else {
            var collection = [];

            var lengthCollection = result.collection.collection.length;

            result.collection.each(function (item) {
              collection.push(item.get("UsrCreditOwner").displayValue);
            });

            this.set("ResponseCollectionOwners", collection);
            this.set("OwnersQuontity", lengthCollection);
          }
        }, this);
      },
      /* Добавляет валидацию к полю "Заявитель". При изменении данного поля либо сохранении записи будет вызываться метод-валидатор. */
      setValidationConfig: function () {
        this.callParent(arguments);
        this.addColumnValidator("UsrCreditOwner", this.authorValidator);
      },
      /* Метод-валидатор — если секция ежедневная, сравнивает текущее количество заявителей с системной настройкой "MaximumCreditRequests" и в случае превышения добавляет в поле "Заявитель" предупреждающее сообщение. Сохранение записи в таком случае невозможно. */
      authorValidator: function () {
        var invalidMessage = "";
        var incrementNumber = "";
        var author = this.get("UsrCreditOwner").displayValue;
        var ownersQuontity = this.get("OwnersQuontity");
        var myVariable = this.get("MaximumCreditRequests");
        var collection = this.get("ResponseCollectionOwners");
        var lengthCollection = 0;
        incrementNumber += ownersQuontity + 1;
        this.set("UsrCreditNumber", incrementNumber);

        for (let i = 0; i < ownersQuontity; i++) {
          if (author === collection[i]) {
            lengthCollection++;
          }
        }
        if (lengthCollection >= myVariable) {
          invalidMessage =
            "Количество выданных кредитов не может быть более " + myVariable;
        }

        return {
          invalidMessage: invalidMessage,
        };
      },
      /* Получает значение системной настройки "MaximumCreditRequests". */
      getMaximumCreditRequests: function () {
        var myVariable;
        var callback = function (value) {
          myVariable = value;
        };
        this.BPMSoft.SysSettings.querySysSettingsItem(
          "MaximumCreditRequests",
          callback,
          this
        );
        if (myVariable === undefined) {
          return;
        } else {
          this.set("MaximumCreditRequests", myVariable);
        }
      },
    },
    dataModels: /**SCHEMA_DATA_MODELS*/ {} /**SCHEMA_DATA_MODELS*/,
    diff: /**SCHEMA_DIFF*/ [
      {
        operation: "insert",
        name: "STRING8e7dd893-6fbc-4724-b184-1f8ad82da5a7",
        values: {
          layout: {
            colSpan: 24,
            rowSpan: 1,
            column: 0,
            row: 0,
            layoutName: "ProfileContainer",
          },
          bindTo: "UsrCreditNumber",
          enabled: true,
        },
        parentName: "ProfileContainer",
        propertyName: "items",
        index: 0,
      },
      {
        operation: "insert",
        name: "LOOKUPc6fd02e2-6110-4978-9e25-cbe4a90a0fe4",
        values: {
          layout: {
            colSpan: 24,
            rowSpan: 1,
            column: 0,
            row: 1,
            layoutName: "ProfileContainer",
          },
          bindTo: "UsrCreditCategory",
          enabled: true,
          contentType: 3,
        },
        parentName: "ProfileContainer",
        propertyName: "items",
        index: 1,
      },
      {
        operation: "insert",
        name: "LOOKUP160ec467-94f4-4a2d-a78d-170832f56a3e",
        values: {
          layout: {
            colSpan: 24,
            rowSpan: 1,
            column: 0,
            row: 2,
            layoutName: "ProfileContainer",
          },
          bindTo: "UsrCreditStatus",
          enabled: true,
          contentType: 3,
        },
        parentName: "ProfileContainer",
        propertyName: "items",
        index: 2,
      },
      {
        operation: "insert",
        name: "LOOKUP1f1ec349-0946-4d81-bbba-f6d94d04721c",
        values: {
          layout: {
            colSpan: 24,
            rowSpan: 1,
            column: 0,
            row: 3,
            layoutName: "ProfileContainer",
          },
          bindTo: "UsrCreditOwner",
          enabled: true,
          contentType: 5,
        },
        parentName: "ProfileContainer",
        propertyName: "items",
        index: 3,
      },
      {
        operation: "insert",
        name: "LOOKUPba519d78-d5a3-47fc-a37f-dcebda93b3a2",
        values: {
          layout: {
            colSpan: 24,
            rowSpan: 1,
            column: 0,
            row: 4,
            layoutName: "ProfileContainer",
          },
          bindTo: "UsrCreditResponible",
          enabled: true,
          contentType: 5,
        },
        parentName: "ProfileContainer",
        propertyName: "items",
        index: 4,
      },
      {
        operation: "insert",
        name: "DATETIME87b3f302-32fa-4b51-a89d-e540e3bba95d",
        values: {
          layout: {
            colSpan: 24,
            rowSpan: 1,
            column: 0,
            row: 5,
            layoutName: "ProfileContainer",
          },
          bindTo: "UsrCreditDateValidity",
          enabled: true,
        },
        parentName: "ProfileContainer",
        propertyName: "items",
        index: 5,
      },
      {
        operation: "insert",
        name: "INTEGERb7a11b43-dd70-470e-96ff-479251a2ff3b",
        values: {
          layout: {
            colSpan: 24,
            rowSpan: 1,
            column: 0,
            row: 6,
            layoutName: "ProfileContainer",
          },
          bindTo: "UsrCreditSum",
          enabled: true,
        },
        parentName: "ProfileContainer",
        propertyName: "items",
        index: 6,
      },
      {
        operation: "insert",
        name: "NotesAndFilesTab",
        values: {
          caption: {
            bindTo: "Resources.Strings.NotesAndFilesTabCaption",
          },
          items: [],
          order: 0,
        },
        parentName: "Tabs",
        propertyName: "tabs",
        index: 0,
      },
      {
        operation: "insert",
        name: "Files",
        values: {
          itemType: 2,
        },
        parentName: "NotesAndFilesTab",
        propertyName: "items",
        index: 0,
      },
      {
        operation: "insert",
        name: "NotesControlGroup",
        values: {
          itemType: 15,
          caption: {
            bindTo: "Resources.Strings.NotesGroupCaption",
          },
          items: [],
        },
        parentName: "NotesAndFilesTab",
        propertyName: "items",
        index: 1,
      },
      {
        operation: "insert",
        name: "Notes",
        values: {
          bindTo: "UsrNotes",
          dataValueType: 1,
          contentType: 4,
          layout: {
            column: 0,
            row: 0,
            colSpan: 24,
          },
          labelConfig: {
            visible: false,
          },
          controlConfig: {
            imageLoaded: {
              bindTo: "insertImagesToNotes",
            },
            images: {
              bindTo: "NotesImagesCollection",
            },
          },
        },
        parentName: "NotesControlGroup",
        propertyName: "items",
        index: 0,
      },
      {
        operation: "merge",
        name: "ESNTab",
        values: {
          order: 1,
        },
      },
    ] /**SCHEMA_DIFF*/,
  };
});

